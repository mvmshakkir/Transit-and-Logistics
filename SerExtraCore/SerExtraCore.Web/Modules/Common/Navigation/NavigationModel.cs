﻿
namespace SerExtraCore.Navigation
{
    using SerExtraCore.Administration.Entities;
    using Serenity;
    using Serenity.Navigation;
    using System;
    using System.Collections.Generic;
    using System.Web;
    using System.Web.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Http.Extensions;
    using SerExtraCore.Web.Modules;
    using System.Linq;

    public partial class NavigationModel
    {
        public List<NavigationItem> Items { get; private set; }
        public int[] ActivePath { get; set; }

        public List<NavigationItem> ReportItems { get; private set; }
        public NavigationModel()
        {
            Items = TwoLevelCache.GetLocalStoreOnly("LeftNavigationModel:NavigationItems:" + (Authorization.UserId ?? "-1"), TimeSpan.Zero,
                UserPermissionRow.Fields.GenerationKey, () =>
                    NavigationHelper.GetNavigationItems(x =>
                        x != null && x.StartsWith("~/") ? VirtualPathUtility.ToAbsolute(x) : x));

            SetActivePath();

            //report
            var reports = new DataHelper().GetReportList(null, 2);
            ReportItems = new List<NavigationItem>();
            foreach (var item in reports)
            {
                if (Authorization.HasPermission(item.PermissionKey))
                {
                    if (!ReportItems.Any(i => i.Title == item.Category))
                    {
                        ReportItems.Add(new NavigationItem { Title = item.Category, Url = "/Reports/ReportCategory?catename=" + item.Category + "" });
                    }
                }
            }
            if (ReportItems.Count > 0)
            {
                if (!Items.Any(i => i.Title == "Reports"))
                {
                    Items.Add(new NavigationItem { Title = "Reports", IconClass = "fa-files-o" });
                }
            }



            //end report
        }

        private void SetActivePath()
        {
            string currentUrl = "";
            var httpContext = Dependency.Resolve<IHttpContextAccessor>().HttpContext;
            if (httpContext != null)
            {
                var requestUrl = httpContext.Request.GetDisplayUrl();

                currentUrl = requestUrl.ToString();
                if (!requestUrl.ToString().EndsWith("/") &&
                    String.Compare(httpContext.Request.Path,
                        HostingEnvironment.ApplicationVirtualPath, StringComparison.OrdinalIgnoreCase) == 0)
                    currentUrl += "/";
            }

            int[] currentPath = new int[10];
            int[] bestMatch = null;
            int bestMatchLength = 0;

            foreach (var item in Items)
                SearchActivePath(item, currentUrl, currentPath, 0, ref bestMatch, ref bestMatchLength);

            ActivePath = bestMatch == null ? new int[10] { -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 } : bestMatch;
        }

        private void SearchActivePath(NavigationItem link, string currentUrl, int[] currentPath, int depth,
            ref int[] bestMatch, ref int bestMatchLength)
        {
            currentPath[depth + 1] = 0;
            var url = link.Url ?? "";

            if (url != null && url.StartsWith("~/", StringComparison.Ordinal))
                url = VirtualPathUtility.ToAbsolute(url);

            if (currentUrl.IndexOf(url, StringComparison.OrdinalIgnoreCase) >= 0 &&
                (bestMatchLength == 0 || url.Length > bestMatchLength))
            {
                bestMatch = (int[])currentPath.Clone();
                bestMatchLength = url.Length;
            }

            if (depth <= 9)
            {
                foreach (var child in link.Children)
                    SearchActivePath(child, currentUrl, currentPath, depth + 1, ref bestMatch, ref bestMatchLength);
            }

            currentPath[depth]++;
        }
    }
}