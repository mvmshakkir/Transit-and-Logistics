
namespace SerExtraCore.Master.Lookups
{
    using SerExtraCore.Administration.Entities;
    using SerExtraCore.Master.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Master.ClearanceStatuses")]
    public sealed class ClearanceStatusLookup : RowLookupScript<ClearanceStatusRow>
    {
        public ClearanceStatusLookup()
        {
            IdField = ClearanceStatusRow.Fields.Id.PropertyName;
            TextField = ClearanceStatusRow.Fields.Status.PropertyName;
            Permission = "*";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query.OrderBy("ChartOrder"));
        }
    }
}