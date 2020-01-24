import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-billing-details',
  templateUrl: './patient-billing-details.component.html',
  styleUrls: ['./patient-billing-details.component.css']
})
export class PatientBillingDetailsComponent implements OnInit {
  patientPaymentStatus='Paid';
  pristineVisits;
  changedPaymentStatus;
  editClicked:Boolean= false;
  selectedVisitId='-1';
  selectedBillId='-1';
  medicineCharges = 0;
  admissionCharges = 0;
  doctorFees = 0;
  hospitalCharge = 0;
  miscellaneousCharge = 0;
  patientIndoorFlag: Boolean = false;
  patientFirstName= 'John';
  patientLastName= 'Doe';
  patientID= '1101';
  patientContactDetails="99999 99999";
  hospitalName="Hospital 1";
  date= new Date();
  dateNow=this.date.getDate()  + "/" + (this.date.getMonth()+1) + "/" + this.date.getFullYear();
  billingDetails1 =[
    {
      transactionId: '111',
      date: '23/01/2020',
      type: 'Registration',
      amount:'1800',
      amountBreakup: [
        {
          chargeType:'Hospital Charges',
          chargedAmount:'300'
        },
        {
          chargeType:'Doctor Fees',
          chargedAmount:'400'
        },
        {
          chargeType:'Medicine Charges',
          chargedAmount:'500'
        },
        {
          chargeType:'Miscellaneous Charges',
          chargedAmount:'600'
        },
        {
          chargeType:'Admission Charges',
          chargedAmount: '0'
        }
      ],
      paymentStatus: 'Paid'
    },
    {
      transactionId: '121',
      date: '23/01/2020',
      type: 'Registration',
      amount:'1000',
      amountBreakup: [
        {
          chargeType:'Hospital Charges',
          chargedAmount:'300'
        },
        {
          chargeType:'Doctor Fees',
          chargedAmount:'400'
        },
        {
          chargeType:'Medicine Charges',
          chargedAmount:'500'
        },
        {
          chargeType:'Miscellaneous Charges',
          chargedAmount:'600'
        },
        {
          chargeType:'Admission Charges',
          chargedAmount: '0'
        }
      ],
      paymentStatus: 'Paid'
    },
    {
      transactionId: '131',
      date: '23/01/2020',
      type: 'Blood Test',
      amount:'1000',
      amountBreakup: [
        {
          chargeType:'Hospital Charges',
          chargedAmount:'300'
        },
        {
          chargeType:'Doctor Fees',
          chargedAmount:'400'
        },
        {
          chargeType:'Medicine Charges',
          chargedAmount:'500'
        },
        {
          chargeType:'Miscellaneous Charges',
          chargedAmount:'600'
        },
        {
          chargeType:'Admission Charges',
          chargedAmount: '0'
        }
      ],
      paymentStatus: 'Unpaid' 
     },
    {
      transactionId: '141',
      date: '23/01/2020',
      type: 'Registration',
      amount:'1000',
      amountBreakup: [
        {
          chargeType:'Hospital Charges',
          chargedAmount:'300'
        },
        {
          chargeType:'Doctor Fees',
          chargedAmount:'400'
        },
        {
          chargeType:'Medicine Charges',
          chargedAmount:'500'
        },
        {
          chargeType:'Miscellaneous Charges',
          chargedAmount:'600'
        },
        {
          chargeType:'Admission Charges',
          chargedAmount: '0'
        }
      ],
      paymentStatus: 'Paid'
    }
  ];
  billingDetails2 =[
    {
      transactionId: '211',
      date: '23/01/2020',
      type: 'Registration',
      amount:'1000',
      amountBreakup: [
        {
          chargeType:'Hospital Charges',
          chargedAmount:'300'
        },
        {
          chargeType:'Doctor Fees',
          chargedAmount:'400'
        },
        {
          chargeType:'Medicine Charges',
          chargedAmount:'500'
        },
        {
          chargeType:'Miscellaneous Charges',
          chargedAmount:'600'
        },
        {
          chargeType:'Admission Charges',
          chargedAmount: '0'
        }
      ],
      paymentStatus: 'Paid'
    },
    {
      transactionId: '221',
      date: '23/01/2020',
      type: 'Registration',
      amount:'1000',
      amountBreakup: [
        {
          chargeType:'Hospital Charges',
          chargedAmount:'300'
        },
        {
          chargeType:'Doctor Fees',
          chargedAmount:'400'
        },
        {
          chargeType:'Medicine Charges',
          chargedAmount:'500'
        },
        {
          chargeType:'Miscellaneous Charges',
          chargedAmount:'600'
        },
        {
          chargeType:'Admission Charges',
          chargedAmount: '0'
        }
      ],
      paymentStatus: 'Paid'
    },
    {
      transactionId: '231',
      date: '23/01/2020',
      type: 'Blood Test',
      amount:'1000',
      amountBreakup: [
        {
          chargeType:'Hospital Charges',
          chargedAmount:'300'
        },
        {
          chargeType:'Doctor Fees',
          chargedAmount:'400'
        },
        {
          chargeType:'Medicine Charges',
          chargedAmount:'500'
        },
        {
          chargeType:'Miscellaneous Charges',
          chargedAmount:'600'
        },
        {
          chargeType:'Admission Charges',
          chargedAmount: '0'
        }
      ],
      paymentStatus: 'unpaid' 
     },
    {
      transactionId: '241',
      date: '23/01/2020',
      type: 'Registration',
      amount:'1000',
      amountBreakup: [
        {
          chargeType:'Hospital Charges',
          chargedAmount:'300'
        },
        {
          chargeType:'Doctor Fees',
          chargedAmount:'400'
        },
        {
          chargeType:'Medicine Charges',
          chargedAmount:'500'
        },
        {
          chargeType:'Miscellaneous Charges',
          chargedAmount:'600'
        },
        {
          chargeType:'Admission Charges',
          chargedAmount: '0'
        }
      ],
      paymentStatus: 'Paid'
    }
  ];
  billingDetails3 =[
    {
      transactionId: '311',
      date: '23/01/2020',
      type: 'Registration',
      paymentStatus: 'Paid',
      amount:'100',
      amountBreakup: [
        {
          chargeType:'Hospital Charges',
          chargedAmount:'300'
        },
        {
          chargeType:'Doctor Fees',
          chargedAmount:'400'
        },
        {
          chargeType:'Medicine Charges',
          chargedAmount:'500'
        },
        {
          chargeType:'Miscellaneous Charges',
          chargedAmount:'600'
        },
        {
          chargeType:'Admission Charges',
          chargedAmount: '0'
        }
      ]
    },
    {
      transactionId: '321',
      date: '23/01/2020',
      type: 'Registration',
      paymentStatus: 'Paid',
      amount:'100',
      amountBreakup: [
        {
          chargeType:'Hospital Charges',
          chargedAmount:'300'
        },
        {
          chargeType:'Doctor Fees',
          chargedAmount:'400'
        },
        {
          chargeType:'Medicine Charges',
          chargedAmount:'500'
        },
        {
          chargeType:'Miscellaneous Charges',
          chargedAmount:'600'
        },
        {
          chargeType:'Admission Charges',
          chargedAmount: '0'
        }
      ]
    },
    {
      transactionId: '331',
      date: '23/01/2020',
      type: 'Blood Test',
      paymentStatus: 'unpaid' ,
      amount:'100',
      amountBreakup: [
        {
          chargeType:'Hospital Charges',
          chargedAmount:'300'
        },
        {
          chargeType:'Doctor Fees',
          chargedAmount:'400'
        },
        {
          chargeType:'Medicine Charges',
          chargedAmount:'500'
        },
        {
          chargeType:'Miscellaneous Charges',
          chargedAmount:'600'
        },
        {
          chargeType:'Admission Charges',
          chargedAmount: '0'
        }
      ]
     },
    {
      transactionId: '341',
      date: '23/01/2020',
      type: 'Registration',
      paymentStatus: 'Paid',
      amount:'100',
      amountBreakup: [
        {
          chargeType:'Hospital Charges',
          chargedAmount:'300'
        },
        {
          chargeType:'Doctor Fees',
          chargedAmount:'400'
        },
        {
          chargeType:'Medicine Charges',
          chargedAmount:'500'
        },
        {
          chargeType:'Miscellaneous Charges',
          chargedAmount:'600'
        },
        {
          chargeType:'Admission Charges',
          chargedAmount: '0'
        }
      ]
    }
  ];
  visits = [
    {value: 's-0', visitID: 'v01',date:'23/01/2020',bills:this.billingDetails1},
    {value: 's-1', visitID: 'v02',date:'22/01/2020',bills:this.billingDetails2},
    {value: 's-2', visitID: 'v03',date:'21/01/2020',bills:this.billingDetails3}
  ];

  
  constructor() { 
  }
 

  ngOnInit() {
    this.pristineVisits=this.visits;
    console.log(JSON.stringify(this.pristineVisits));
  }
  editToggle(visitId,billId,transactionId){
    console.log(visitId);
    console.log(billId);
    //console.log(transactionId);
    this.editClicked=!this.editClicked;
    this.selectedVisitId=visitId;
    this.selectedBillId=billId;
  }
  saveBillDetails(visitId,billId,transactionId){
    //http
    console.log(visitId);
    console.log(billId);
    //console.log(transactionId);
    
    this.editClicked=!this.editClicked;
    this.selectedBillId='-1';
    this.selectedVisitId='-1';
  }
  cancel(){
    this.editClicked=!this.editClicked;
    this.selectedBillId='-1';
    this.selectedVisitId='-1';
    this.visits=this.pristineVisits;
  }

  indoorFlagChange(){
    if(this.patientIndoorFlag==true){
      this.admissionCharges=0;
    }
  }
}
