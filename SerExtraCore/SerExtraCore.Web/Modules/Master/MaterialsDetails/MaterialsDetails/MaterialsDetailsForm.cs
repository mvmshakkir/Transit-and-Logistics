using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;
using SerExtraCore.UOMAmount.Entities;
using SerExtraCore.UOMAmount;

namespace SerExtraCore.MaterialsDetails.Forms
{
    [FormScript("MaterialsDetails.MaterialsDetails")]
    [BasedOnRow(typeof(Entities.MaterialsDetailsRow), CheckNames = true)]
    public class MaterialsDetailsForm
    {
        public String Materials { get; set; }

        [DisplayName("Unit"), UOMAmountEditor, IgnoreName]
        public List<UOMAmountRow> Units { get; set; }
    }
}