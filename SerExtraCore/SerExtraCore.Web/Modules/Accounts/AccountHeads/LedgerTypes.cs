
using System.ComponentModel;

namespace SerExtraCore
{
    public enum LedgerTypes
    {
        [Description("Asset")]
        Value1 = 1,
        [Description("Liability")]
        Value2 = 2,
        [Description("Expense")]
        Value3 = 3,
        [Description("Revenue")]
        Value4 = 4,
        [Description("Capital")]
        Value5 = 5,
    }
}
