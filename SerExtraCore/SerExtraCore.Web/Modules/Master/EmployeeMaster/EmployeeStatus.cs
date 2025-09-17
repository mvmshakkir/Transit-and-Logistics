
using System.ComponentModel;

namespace SerExtraCore
{
    public enum EmployeeStatus
    {

        [Description("Available")]
        Value1 = 1,
        [Description("Unavailable")]
        Value2 = 2,
        [Description("Suspended")]
        Value3 = 3,

        [Description("Dismissed")]
        Value4 = 4,
        

    }
}
