
using System.ComponentModel;

namespace SerExtraCore
{
    public enum ChequeStatus
    {

        [Description("Issued")]
        Issued = 1,
        [Description("Cleared")]
        Cleared = 2,
        [Description("Canceled")]
        Canceled = 3,

        
        

    }
}
