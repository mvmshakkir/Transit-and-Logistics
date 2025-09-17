
namespace SerExtraCore.Accounts.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Entities.BankReconciliationRow;

    public class BankReconciliationRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }
        public ListResponse<MyRow> List(IDbConnection connection,
           ListRequest request)
        {
            int accountid = 0;

            var xx = request.EqualityFilter.Get("AccountId");
            var val = (xx as string);
            int.TryParse(val, out accountid);
            DateTime? from = null;
            DateTime? to = null;

            var sdate = request.EqualityFilter.Get("StartDate");

            if (sdate != null)
            {
                if (sdate as string != "")
                {
                    DateTime ssdate;
                    DateTime.TryParse(sdate as string, out ssdate);
                    from = ssdate;
                }
            }
            var edate = request.EqualityFilter.Get("EndDate");
            if (edate != null)
            {
                if (edate as string != "")
                {

                    DateTime eedate;
                  
                    DateTime.TryParse(edate as string, out eedate);
                    to = eedate;
                }
            }


            var data = connection.Query<MyRow>("BankReconciliation",
                param: new
                {
                    AccountId= accountid,
                    FromDate = from,
                    ToDate = to
                },
                commandType: System.Data.CommandType.StoredProcedure);

            var response = new ListResponse<MyRow>();
            response.Entities = (List<MyRow>)data;
            return response;
        }


    }
}