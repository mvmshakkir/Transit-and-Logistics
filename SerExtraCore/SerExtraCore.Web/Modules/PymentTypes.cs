
using System.ComponentModel;

namespace SerExtraCore
{
    public enum PymentTypes
    {
        [Description("Cash")]
        Cash = 1,
        [Description("Bank")]
        Bank = 2,
        [Description("Cheque")]
        Cheque = 3,

    }
}
