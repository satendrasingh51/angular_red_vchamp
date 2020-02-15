import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanApiService } from '../authontication/pan-api.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Pan } from '../authontication/panSchema';
@Component({
  selector: 'app-edit-pan',
  templateUrl: './edit-pan.component.html',
  styleUrls: ['./edit-pan.component.css']
})
export class EditPanComponent implements OnInit {
 
  panEditForm: FormGroup;
  submitted = false;
  panData: Pan[];
  constructor(
    private formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private panApiService: PanApiService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.updatePan();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getPan(id);
    this.panEditForm = this.formBuilder.group({
        areaoffice: ['', ],
        aocode: ['', ],
        ao: ['', ],
        range: ['', ],
        aonumber: ['', ],
        application: ['', [Validators.required]],
        old_pan: ['', [Validators.required]],
        category: ['', [Validators.required]],
        applicant: ['', [Validators.required]],
        firstname: ['', [Validators.required]],
        middlename: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        ffirstname: ['', [Validators.required]],
        fmiddlename: ['', [Validators.required]],
        flastname: ['', [Validators.required]],
        cardHolder: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        contect_number: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        proofid: ['', [Validators.required]],
        proofadd: ['', [Validators.required]],
        proofdob: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        adhar_number: ['', [Validators.required]],
        address_f: ['', [Validators.required]],
        address_v: ['', [Validators.required]],
        address_p: ['', [Validators.required]],
        address_divi: ['', [Validators.required]],
        address_d: ['', [Validators.required]],
        state: ['', [Validators.required]],
        pin_code: ['', [Validators.required]],
        document: ['', [Validators.required]],

})

  }
    // convenience getter for easy access to form fields
    get f() { return this.panEditForm.controls; }

  getPan(id){
    this.panApiService.getPan(id).subscribe(data =>{
      this.panEditForm.setValue({
        areaoffice: data['areaoffice'],
        aocode: data['aocode'],
        ao: data['ao' ],
        range: data['range' ],
        aonumber: data['aonumber' ],
        application: data['application'],
        old_pan: data['old_pan'],
        category: data['category'],
        applicant: data['applicant'],
        firstname: data['firstname'],
        middlename: data['middlename'],
        lastname: data['lastname'],
        ffirstname: data['ffirstname'],
        fmiddlename: data['fmiddlename'],
        flastname: data['flastname'],
        cardHolder: data['cardHolder'],
        dob: data['dob'],
        contect_number: data['contect_number'],
        email: data['email'],
        proofid: data['proofid'],
        proofadd: data['proofadd'],
        proofdob: data['proofdob'],
        gender: data['gender'],
        adhar_number: data['adhar_number'],
        address_f: data['address_f'],
        address_v: data['address_v'],
        address_p: data['address_p'],
        address_divi: data['address_divi'],
        address_d: data['address_d'],
        state: data['state'],
        pin_code: data['pin_code'],
        document: data['document'],
      });
    });
  }


  updatePan(){
    this.panEditForm = this.formBuilder.group({
      
      areaoffice: ['', ],
        aocode: ['', ],
        ao: ['', ],
        range: ['', ],
        aonumber: ['', ],
        application: ['', [Validators.required]],
        old_pan: ['', [Validators.required]],
        category: ['', [Validators.required]],
        applicant: ['', [Validators.required]],
        firstname: ['', [Validators.required]],
        middlename: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        ffirstname: ['', [Validators.required]],
        fmiddlename: ['', [Validators.required]],
        flastname: ['', [Validators.required]],
        cardHolder: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        contect_number: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        proofid: ['', [Validators.required]],
        proofadd: ['', [Validators.required]],
        proofdob: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        adhar_number: ['', [Validators.required]],
        address_f: ['', [Validators.required]],
        address_v: ['', [Validators.required]],
        address_p: ['', [Validators.required]],
        address_divi: ['', [Validators.required]],
        address_d: ['', [Validators.required]],
        state: ['', [Validators.required]],
        pin_code: ['', [Validators.required]],
        document: ['', [Validators.required]],

    });
  }

  onSubmit(){
    this.submitted = true;
    if(!this.panEditForm.valid){
      return false;
    }else{
      if(window.confirm('Are you sure?')){
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.panApiService.updatePan(id, this.panEditForm.value)
        .subscribe(res =>{
          this.router.navigateByUrl('/panDetail');
          console.log('Content updete successfully!')
        },(error)=>{
          console.log(error);
          
        })
      }
    }
  }

    applicationType = ['NEW APPLICATION', 'CORRACTION/REPRINT'];

    applicantTitle = ['SHRI','SMT','KUMARI MS','M S'];
  
  applicantCategory = ['INDIVIDUAL'];
        state = ['-select-','ANDAMAN AND NICOBAR ISLANDS','ANDHRA PRADESH','ARUNACHAL PRADESH','ASSAM','BIHAR','DADRA AND NAGAR HAVELI','DAMAN AND DIU','DELHI','GOA','GUJARAT','HARYANA','HIMACHAL PRADESH','JAMMU AND KASHMIR','KARNATAKA','KERALA','LAKHSWADEEP',        'MADHYA PRADESH','MAHARASHTRA','MANIPUR','MEGHALAYA','MIZORAM','NAGALAND','ORISSA','PONDICHERRY','PUNJAB','RAJASTHAN',  'SIKKIM','TAMILNADU','TRIPURA','UTTAR PRADESH','WEST BENGAL','CHHATISHGARH','UTTRAKHAND','JHARKHAND','TELANGANA','ADDRESS OF DEFENCE EMPLOYEES', 'FOREIGN ADDRESS'];
        
        gender = [ '--select--', 'MALE', 'FEMALE'];
      
      identy = ['--select--','AGREEMENT','AADHAAR','CERTIFICATE OF REGISTRATION NUMBER ISSUED BY ANY OTHER COMPETENT AUTHRITY','CERTIFICATE OF REGISTRATION NUMBER ISSUED BY CHARITY COMMISSIONER','CERTIFICATE OF REGISTRATION NUMBER ISSUED BYREGISTER OF CO-OP SOCIETY',          'ANY DOCUMENT ORIGINATING FORM ANY CENTRAL OR STATE GOVT. DEPARTMENT ESTABLISHING IDENTITY OR SUCH PERSON',          'COPY OF APPROVAL GRANTED TO SET UP OFFICE IN INDIA BY INDIAN AUTHORITIES','COPY OF REGISTRATION CERTIFICATE ISSUED IN INDIA BY INDIAN AUTHORITIES', 'REGISTRATION CERTIFICATE OF THEIR COUNTRY DULY ATTESTED BY INDIAN EMBASSY CONSULATE HIGH COMMISSION APOSTILLE IN THE COUNTRY WHERE APPLICATION IS LOCATE AUTHORISED OFFICALS OF OVERSEAS BRANCHES OF SCHEDULED BANKS REGISTERED IN INDAI',          'OTHERS'
      ]
      
}
