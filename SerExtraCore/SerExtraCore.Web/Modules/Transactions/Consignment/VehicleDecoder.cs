
namespace SerExtraCore.Transactions
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class EmployeeListDecorator : BaseCellDecorator
    {
        public override void Decorate()
        {
            var idList = this.Value as IEnumerable<int>;
            if (idList == null || !idList.Any())
            {
                this.Value = "";
                return;
            }

            var byId = TwoLevelCache.GetLocalStoreOnly("EmployeeListDecorator:EmployeeById",
                TimeSpan.Zero, Master.Entities.VehiclesRow.Fields.GenerationKey, () =>
                {
                    using (var connection = SqlConnections.NewFor<Master.Entities.VehiclesRow>())
                    {
                        var fld = Master.Entities.VehiclesRow.Fields;
                        return connection.List<Master.Entities.VehiclesRow>(q => q
                            .Select(fld.Id)
                            .Select(fld.VehicleNumber))
                            .ToDictionary(x => x.Id.Value);
                    }
                });

            this.Value = String.Join(", ", idList.Select(x =>
            {
                Master.Entities.VehiclesRow e;
                return byId.TryGetValue(x, out e) ? e.VehicleNumber : x.ToString();
            }));
        }
    }
}
