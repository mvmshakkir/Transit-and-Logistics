
using System.ComponentModel;

namespace SerExtraCore
{
    public enum VoucherTypes
    {
        [Description("Receipt")]
        Value1 = 1,
        [Description("Payment")]
        Value2 = 2,
        [Description("Contra")]
        Value3 = 3,


    }
}
