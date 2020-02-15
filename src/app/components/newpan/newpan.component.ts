import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanApiService } from '../authontication/pan-api.service'
import { Router } from '@angular/router';
// import custom validator to validate that password and confirm password fields match
// import { MustMatch } from './must-match.validator';


@Component({
  selector: 'app-newpan',
  templateUrl: './newpan.component.html',
  styleUrls: ['./newpan.component.css']
})
export class NewpanComponent implements OnInit {

panForm: FormGroup;
submitted = false

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private panApiService: PanApiService
    ) {   }
   
      ngOnInit() {
              this.panForm = this.formBuilder.group({
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
    get f() { return this.panForm.controls; }

    onSubmit() {

      this.submitted = true;
      if(!this.panForm.valid){
        return false;
      }else {
        this.panApiService.createPan(this.panForm.value).subscribe(
          (res)=>{
            console.log('Pan successfully created!')
            this.ngZone.run(()=> this.router.navigateByUrl('/panDetail'))
          },(error)=>{
            console.log(error);
          }
        )
      }

        // this.submitted = true;

        // // stop here if form is invalid
        // if (this.panForm.invalid) {
        //     return;
        // }

        // // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.panForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.panForm.reset();
    }



  applicationType = ['NEW APPLICATION', 'CORRACTION/REPRINT'];

  applicantTitle = ['SHRI','SMT','KUMARI MS','M S'];

applicantCategory = ['INDIVIDUAL'];
      state = ['-select-','ANDAMAN AND NICOBAR ISLANDS','ANDHRA PRADESH','ARUNACHAL PRADESH','ASSAM','BIHAR','DADRA AND NAGAR HAVELI','DAMAN AND DIU','DELHI','GOA','GUJARAT','HARYANA','HIMACHAL PRADESH','JAMMU AND KASHMIR','KARNATAKA','KERALA','LAKHSWADEEP',        'MADHYA PRADESH','MAHARASHTRA','MANIPUR','MEGHALAYA','MIZORAM','NAGALAND','ORISSA','PONDICHERRY','PUNJAB','RAJASTHAN',  'SIKKIM','TAMILNADU','TRIPURA','UTTAR PRADESH','WEST BENGAL','CHHATISHGARH','UTTRAKHAND','JHARKHAND','TELANGANA','ADDRESS OF DEFENCE EMPLOYEES', 'FOREIGN ADDRESS'];
      
      gender = [ '--select--', 'MALE', 'FEMALE'];
    
    identy = ['--select--','AGREEMENT','AADHAAR','CERTIFICATE OF REGISTRATION NUMBER ISSUED BY ANY OTHER COMPETENT AUTHRITY','CERTIFICATE OF REGISTRATION NUMBER ISSUED BY CHARITY COMMISSIONER','CERTIFICATE OF REGISTRATION NUMBER ISSUED BYREGISTER OF CO-OP SOCIETY',          'ANY DOCUMENT ORIGINATING FORM ANY CENTRAL OR STATE GOVT. DEPARTMENT ESTABLISHING IDENTITY OR SUCH PERSON',          'COPY OF APPROVAL GRANTED TO SET UP OFFICE IN INDIA BY INDIAN AUTHORITIES','COPY OF REGISTRATION CERTIFICATE ISSUED IN INDIA BY INDIAN AUTHORITIES', 'REGISTRATION CERTIFICATE OF THEIR COUNTRY DULY ATTESTED BY INDIAN EMBASSY CONSULATE HIGH COMMISSION APOSTILLE IN THE COUNTRY WHERE APPLICATION IS LOCATE AUTHORISED OFFICALS OF OVERSEAS BRANCHES OF SCHEDULED BANKS REGISTERED IN INDAI',          'OTHERS'
    ]
    
    // district = ['ABOHAR','ABU','ADILABAD','ADONI','AGAR','AGARTALA','AGRA','AHMEDABAD','AHMEDNAGAR', 'AIZAWL','AJMER','AKOLA','ALAPPUZHA','ALIGARH','ALIPURDUAR','ALLAHABAD','ALMORA','ALUVA','ALWAR',            'AMALAPURAM','AMBALA','AMBEDKAR NAGAR','AMBIKAPUR','AMETHI','AMRAVATI','AMRELI','AMRITSAR','AMROHA',            'ANAKAPALLI','ANAND','ANANTAPUR','ANANTNAG','ANDAMAN & NICOBAR','ANGUL','ARA','ASANSOL','ASHOK NAGAR',            'AURAIYA','AURANGABAD','AZAMGARH','BADAUN','BADDI','BAGALKOT','BAHRAICH','BAJPUR','BALAGHAT','BALESWAR','BALLIA','BALOTRA','BALURGHAT','BANDA','BANGALORE','BANKURA','BANSWARA','BAPATLA','BARABANKI','BARAMULLA','BARAN','BARAUT','BARDOLI','BAREILLY','BARGARH','BARIPADA','BARMER','BARNALA','BARODA','BARPETA','BASTI','BATALA','BATHINDA','BEAWER','BEED','BEGUSARAI','BEHERAMPUR','BEHROR','BELGAUM','BELLARY','BETTIAH','BETUL','BHADOHI','BHADRAK','BHAGALPUR','BHANDARA','BHARATPUR','BHARUCH','BHATAPARA','BHAVNAGAR','BHAWANIPATNA','BHILAI','BHILWARA','BHIMAVARAM','BHIWADI','BHIWANI','BHOPAL','BHUBANESWAR','BIDAR','BIHARSHARIF','BIJAPUR','BIJNORE','BIKANER','BILASPUR','BINA','BOKARO','BOLANGIR','BONGAIGAON','BULANDSHAHAR','BUNDI','BURDWAN','BURHANPUR','BUXAR','BYRNIHAT','CHAMARAJA NAGAR','CHANDAUSI','CHANDIGARH','CHANDRAPUR','CHAPRA','CHENNAI','CHHATTARPUR','CHHINDWARA','CHIKABALLAPUR','CHIKMAGALUR','CHIRALA','CHITRADURGA','CHITTOOR','CHITTORGARH','CHURU','COIMBATORE','COOCH BEHAR','CUDDALORE','CUTTACK','DAHOD','DALHOUSIE','DAMAN','DAMOH','DARBHANGA','DARJEELING','DASUYA','DAUSA','DAVANAGERE','DEHRADUN','DELHI','DEOBAND','DEOGARH','DEORIA','DEWAS','DHAMPUR','DHAMTARI','DHANBAD','DHAR','DHARAMSHALA','DHARMANAGAR','DHARMAPURI','DHENKANAL','DHUBRI','DHULE','DIBRUGARH','DIGBOI','DIMAPUR','DINDIGUL','DULIAJAN','DUMKA','DUNGARPUR','DURGAPUR','DWARKA','ELURU','ERODE','ETAH','ETAWAH','FAIZABAD','FARIDABAD','FARIDKOT','FARRUKHABAD','FATEHABAD','FATEHPUR','FEROZEPUR','FIROZABAD','GADAG','GANDHIDHAM','GANDHINAGAR','GANGTOK','GAUTAM BUDH NAGAR','GAYA','GHAZIABAD','GHAZIPUR','GIRIDIH','GOALPARA','GOBINDGARH','GODHRA','GOKAK','GOLAGHAT','GONDA','GONDIA','GORAKHPUR','GUDIWADA','GUDUR','GULBARGA','GUNA','GUNTAKAL','GUNTUR','GURDASPUR','GURGAON','GURUVAYOOR','GUWAHATI','GWALIOR','HALDIA','HALDWANI','HAMIRPUR','HANUMANGARH','HAPUR','HARDA','HARDOI','HARDWAR','HASSAN','HATHRAS','HAVERI','HAZARIBAGH','HIMMATNAGAR','HINDUPUR','HINGOLI','HISSAR','HOOGHLY','HOOGLY','HOSHIARPUR','HOSPET','HOSUR','HUBLI','HYDERABAD','ICHALKARANJI','IMPHAL','INDORE','ITANAGAR','ITARSI','JABALPUR','JAGDALPUR','JAGRAON','JAIPUR','JAISALMER','JAJPUR','JALANDHAR','JALGAON','JALNA','JALORE','JALPAIGURI','JAMMU','JAMNAGAR','JAMSHEDPUR','JANJGIR CHAMPA','JAUNPUR','JEYPORE','JHABUA','JHALAWAR','JHANSI','JHARSUGUDA','JHUNJHUNU','JIND','JODHPUR','JORHAT','JUNAGADH','KADAPA','KAITHAL','KAKINADA','KALINGPONG','KALPETTA','KALYAN','KANCHEEPURAM','KANKER','KANNAUJ','KANNUR','KANPUR','KAPURTHALA','KARAIKUDI','KARAULI','KARIMGANJ','KARIMNAGAR','KARNAL','KARUR','KARWAR','KASARGOD','KASGANJ','KASHIPUR','KATHUA','KATIHAR','KATNI','KATRA','KAUSHAMBI','KAWARDHA','KENDRAPADA','KEONJHAR','KHAMGAON','KHAMMAM','KHANDWA','KHANNA','KHARGONE','KHATAULI','KHATIMA','KHURDA','KISHENGARH','KOCHI','KODERMA','KOLAR','KOLHAPUR','KOLKATA','KOLLAM','KOPPAL','KORBA','KOTA','KOTDWAR','KOTHAGUDEM','KOTTAYAM','KOZHIKODE','KRISHNAGIRI','KUDAL','KULLU','KUMBAKONAM','KURNOOL','KURUKSHETRA','KUSHINAGAR','LAKHIMPUR','LAKHISARAI','LALITPUR','LATUR','LUCKNOW','LUDHIANA','LUNAWADA','MACHILIPATNAM','MADANAPALLE','MADHUBANI','MADURAI','MAHABUBNAGAR','MAHASAMUND','MAINPURI','MAKRANA','MALDA','MALEGAON','MALERKOTLA','MANCHIRIYAL','MANDI','MANDLA','MANDSAUR','MANDYA','MANENDRAGARH','MANGALDOI','MANGALORE','MANSA','MARGAO','MARIGAON','MATHURA','MAU','MEERUT','MEHSANA','MERCARA','MIDNAPUR','MIRZAPUR','MODASA','MOGA','MORADABAD','MORBI','MORENA','MOTIHARI','MUKTSAR','MUNGER','MURSHIDABAD','MUZAFFARNAGAR','MUZAFFARPUR','MYSORE','NABHA','NADIA','NADIAD','NAGAON','NAGAPATTINAM','NAGAUR','NAGERCOIL','NAGPUR','NAHAN','NAKODAR','NALBARI','NALGONDA','NAMAKKAL','NANDED','NANDURBAR','NANDYAL','NANITAL','NARASARAOPET','NARNAUL','NARSINGPUR','NASHIK','NAVSARI','NAWANSHAHAR','NAZIBABAD','NEEM KA THANA','NEEMUCH','NELLORE','NIPPANI','NIRMAL','NIZAMABAD','NOHAR','NOKHA','NORTH LAKHIMPUR','NURPUR','ONGOLE','OOTY','ORAI','OSMANABAD','PALAKKAD','PALAKOL','PALAMPUR','PALANPUR','PALGHAR','PALI','PANAJI','PANCHKULA','PANDHARPUR','PANIPAT','PANVEL','PARADEEP','PARBHANI','PARWANOO','PATAN','PATHANKOT','PATIALA','PATNA','PERAMBALUR','PETLAD','PHAGWARA','PHALODI','PHULBANI','PILIBHIT','PITHORAGARH','POLLACHI','PORBANDAR','PRATAPGARH','PRODDATUR','PUDUCHERRY','PUDUKKOTTAI','PUNE','PURI','PURNEA','PURULIA','PUTTUR','RAEBARELI','RAICHUR','RAIGANJ','RAIGARH','RAIPUR','RAISEN','RAJAHMUNDRY','RAJGARH','RAJKOT','RAJNANDGAON','RAJPURA','RAJSAMAND','RAM NAGAR','RAMANATHAPURAM','RAMGARH','RAMNAGAR','RAMPUR','RAMPUR BUSHAHR','RANCHI','RATLAM','RATNAGIRI','RAYAGADA','REWA','REWARI','RISHIKESH','ROHTAK','ROORKEE','ROPAR','ROURKELA','RUDRAPUR','SAGAR','SAHARANPUR','SAHARSA','SAHIBGANJ','SALEM','SAMANA','SAMASTIPUR','SAMBA','SAMBALPUR','SAMBHAL','SANGAREDDY','SANGLI','SANGRUR','SASARAM','SATARA','SATNA','SAWAI MADHOPUR','SEHORE','SENDHWA','SEONI','SHAHDOL','SHAHJAHANPUR','SHAJAPUR','SHAMLI','SHILLONG','SHIMLA','SHIMOGA','SHIVPURI','SIBSAGAR','SIDDHARTH NAGAR','SIDDIPET','SIKAR','SILCHAR','SILIGURI','SILVASSA','SINGRAULI','SIRHIND','SIROHI','SIRSA','SIRSI','SITAMARHI','SITAPUR','SIWAN','SOLAN','SOLAPUR','SONEPAT','SRIGANGANAGAR','SRIKAKULAM','SRINAGAR','SULTANPUR','SUMERPUR','SUNAM','SUNDER NAGAR','SURAT','SURATGARH','SURENDRANAGAR','SURI','SURYAPET','TADEPALLIGUDEM','TAMBARAM','TANUKU','TARN TARAN','TEHRI','TENALI','TEZPUR','THANE','THANJAVUR','THENI','THIRUVALLA','THIRUVANANTHAPURAM','THODUPUZHA','THRISSUR','TIKAMGARH','TINSUKIA','TIPTUR','TIRUNELVELI','TIRUPATI','TIRUPPUR','TIRUR','TIRUVALLUR','TIRUVANNAMALAI','TIRUVARUR','TONK','TRICHY','TUMKUR','TUNI','TUTICORIN','UDAIPUR','UDHAMPUR','UDUPI','UJJAIN','UMARIA','UNA','UNNAO','VAISHALI','VALSAD','VAPI','VARANASI','VELLORE','VIDISHA','VIJAYANAGARAM','VIJAYAWADA','VIKARABAD','VILLUPURAM','VIRUDHUNAGAR','VISAKHAPATNAM','WARANGAL','WARDHA','YADGIR','YAMUNANAGAR','YAVATMAL',
              
    //           ];
    }




      
