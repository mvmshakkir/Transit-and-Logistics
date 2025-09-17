
namespace SerExtraCore.Transactions
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class FromLocationDecorator : BaseCellDecorator
    {
        public override void Decorate()
        {
            var idList = this.Value as IEnumerable<int>;
            if (idList == null || !idList.Any())
            {
                this.Value = "";
                return;
            }

            var byId = TwoLevelCache.GetLocalStoreOnly("FromLocationDecorator:EmployeeById",
                TimeSpan.Zero, ConsignmentVehicleDetailsRow.Fields.GenerationKey, () =>
                {
                    using (var connection = SqlConnections.NewFor<ConsignmentVehicleDetailsRow>())
                    {
                        var fld = ConsignmentVehicleDetailsRow.Fields;
                        return connection.List<ConsignmentVehicleDetailsRow>(q => q
                            .Select(fld.Id)
                            .Select(fld.ShippingAreaFromAreaName))
                            .ToDictionary(x => x.Id.Value);
                    }
                });

            this.Value = String.Join(", ", idList.Select(x =>
            {
                ConsignmentVehicleDetailsRow e;
                return byId.TryGetValue(x, out e) ? e.ShippingAreaFromAreaName : x.ToString();
            }));
        }
    }
}