const wards = [
  "1","2","3","4","5","6","7","8","9","10",
  "11","12","13","14","15","16","17","18","19","20",
  "21","22","23","24","25","26","27","28","29","30"
];
const locationMaster = {
  ATHGARH: {
    DHAIPUR: {
    Dhaipur: wards,
    Gadadhapur: wards,
    Somanathpur: wards,
    Chatabara:wards,
    Radhaprasannapur: wards
  },

  RADHAGOVINDPUR: {
   
    Radhamadhabpur: wards,
    Gobindapur: wards,
    Sudhansumohanpur: wards,
    RadhaGobindapur: wards,
    Radhaballavpur: wards,
    Laxminarayanpur: wards,
    Haripriyapur: wards,
    Radhakesabpur: wards,
  },
   Samsarpur: {
    Samsarpurpur: wards,
    Amrutamanohipatna: wards,
    Ankula: wards,
    Budhiapatna: wards,
    Jaganathpur: wards,
    Radhapatipur: wards,
   
  },

  Sathilo: {
    Sathilo: wards,
    Talabasta: wards,
    Koranga: wards,
    kuanla: wards
  },
  Ichhapur: {
    Ichhapur: wards,
    Gudupada: wards,
    Patanda: wards,
    Arakhapatna: wards,
    Muktadeipur: wards,
  },

  Anantpur: {
    Anantpur: wards,
    Nuasasan: wards,
    Berhmapur: wards,
    Srirangpur: wards
  },
   Dhurusia: {
   
    Dhurusia: wards,
    Bhuinbarei: wards,
    Jagmohanpur: wards,
    Keutapada: wards,
    Jenapur: wards,
    Gopalprasad: wards,
    Baudhapur: wards,
  },

   Radhakishorepur: {
    Radhakishorepur: wards,
    Radhadamoderpur: wards,
    Belda: wards,
    Machhyapur: wards,
    Purusottampur: wards,
    Khamarnuagaon: wards
  },
   Kumarpur: {
    Kumarpur: wards,
    Balipur: wards,
    Kantania: wards,
     Santanibati: wards,
    Dampatipur: wards,
   
  },
   Joranda: {
   
    Joranda: wards,
    Karikol: wards,
    Indipur: wards,
    Paikarapur: wards,
    Nuarath: wards,
    Haridagahira: wards,
   
  },
   Rajanagar: {
   
   Rajanagar: wards,
   Tailamal: wards,
    Gariapat: wards,
    Betakholi: wards,
    Banakhandi: wards,
  
  },
   Bentapada: {
    Bentapada: wards,
    Radhakantapatna: wards,
    Dhanurjaypur: wards,
    Balipada: wards,
    Kulagada:wards,
    "Kendutokoli Sabar Sahi":wards,
    Manapur: wards,
  },
   Tarading: {
   
   Tarading: wards,
    Gajaamba: wards,
    Tentulia: wards,
    Bailo: wards,
    Gourangpur: wards,
    
  },
   Kuspangi: {
   
    Kuspangi: wards,
    Pahilabaar: wards,
    Jemadeipur: wards,
     Sarkoli: wards,
    Baula: wards,
  },
   Oranda: {
   Oranda: wards,
    Bali: wards,
  "Bali sasan": wards,
    "Radhapriapur Sasan": wards,
    Sitarampur: wards,
    Kapursingh: wards,
   
  },
   Mancheswar: {
   Mancheswar: wards,
    Paikarapur: wards,
    SuniaMuhan: wards,
    Kalankipur: wards,
    Lingapada: wards,
    Prasannapur: wards,
    Narangabasta: wards,
    Brahmanbasta: wards,
    Bamanpur: wards,
    Bishnupur: wards,
    Nuadiha: wards,

  },
   Kandarpur: {
   
    Kandarpur: wards,
    Nandilo: wards,
    Routrapur: wards,
    
  },
   Mahakalbasta: {
   
    Mahakalbasta: wards,
    Madhabpur: wards,
    Dahisara: wards,
    Champapur: wards,
    Radhadhabapur: wards,
    Parsurampur: wards,
    Haripur: wards,
   
  },
   Ghantikhal: {
    Ghantikhal: wards,
    Nidhipur: wards,
    Radhashyampur: wards,
    Ramshaympur: wards,
   Chandrabalishyampur: wards,
   
  },
   Dorada: {
   
    Dorada: wards,
    Iswara: wards,
    Chunapada: wards,
    Gopinathpur: wards,
    Udayapurdesh: wards,
    Tarsing: wards,
    Gundichapur: wards,
  },
  Bhogara: {
    Bhogara: wards,
    Mathurapur: wards,
    Totapada: wards,
     Radhasaranpur: wards,
    
  },
  Kulailo: {
    Kulailo: wards,
    UdayaPurdal: wards,
    Karakamal: wards,
    Radhakrushnapur: wards,
    Talagarh: wards,
    Patalinga: wards,
    Silapata: wards,
    Birijinga: wards,
  },
   Megha: {
    Megha: wards,
    Dhurukudia: wards,
    Daspur: wards,
    Baghera: wards,
  },
   Katakiasahi: {
    Katakiasahi: wards,
    Boulpada: wards,
    Bounsdanda: wards,
    Bandhahata: wards,
    Nuagada: wards,
    Balarampur: wards,
    Petenigaon: wards,
  },
   Badabhuin: {
    Badabhuindesh: wards,
    Badabhindala: wards,
    Gopiballavpur: wards,
    Raghunathpurpatna: wards,
    Jagiaapada: wards,
  },
  Jenapadadesh: {
    Jenapadadesh: wards,
    Jenapadadal: wards,
    Kalaragada:wards,
    Bhagirathipur: wards,
    Matikote: wards,
    Jaganathballavpursasan: wards,
  },
   Khuntakata: {
    Khuntakata: wards,
    Regedapada: wards,
    Nuabandha: wards,
    Mahidhapur: wards,
    Radhamohnpur: wards,
    Radhadarshanpur: wards,
  },
   Radhakrushnapur: {
    Radhakrushnapur: wards,
    Rahangol: wards,
    Khanduali: wards,
    Saraswatipur: wards,
  },
   Kandarei: {
    Kandarei: wards,
    Kansar: wards,
    Mahalaxmipur: wards,
    Manitiri: wards,
    Sabitripur: wards,
    Dalua: wards,
  },
   Khuntuni: {
    Khuntuni: wards,
    Rampei: wards,
    Krushnashyampur: wards,
    Nrusinghpur: wards,
    Radharamanpur: wards,
  },
   Dalabhaga: {
    Dalabhaga: wards,
    Champia: wards,
    Chhenakhianuagaon: wards,
   
  },
   Gurudijhatia: {
    Gurudijhatia: wards,
    Chhotiamba: wards,
    Kolathapangi: wards,
    Kotar: wards,
    Pithakhia: wards,
    Sauria: wards,
  },
   Gobara: {
    Gobara: wards,
    Kanthapur: wards,
    "Kadua Nuagaon": wards,
    "Gobara Sasan": wards,
    Rajaballavpur: wards,
    
  },
   Chhagaon: {
    Chhagaon: wards,
    Manitiri: wards,
    Parbatia: wards,
    Charabhaunri: wards,
    Sasanga: wards,
    Baghua: wards,
    Sarakuan: wards,
  },
     

  },

  TIGIRIA: {
   
    Achalakot:{
      Badasahi:wards,
       Mundasahi:wards,
       Sabarsahi:wards,
       Maalisahi:wards,
       Nuasahi:wards,
       Sanapatana:wards,
       "Sanapatana Sabarsahi":wards,
       Badapatna:wards,
       Haridapasi:wards
    },
     Badanauput:{
      Badanauput:wards,
       Salijanga:wards,
       Baulanga:wards,
       khandahata:wards,
      
    },
     Viruda:{
      Uppargada:wards,
       Talagada:wards,
       Godijharia:wards,
       Balipatana:wards,
       Panasapatana:wards,
       Manimagapatna:wards,
       Viruda:wards
    },
     Baliput:{
      Baliput:wards,
       Biriput:wards,
       Baneswarpada:wards,
       Godarabandha:wards,
       
    },
     Hatamala:{
      Hatamala:wards,
      Nandapur:wards,
      Sunthipal:wards,
      Saanpur:wards,
      Bishnupur:wards
    },
     Gadadharpur:{
      Gadadharpur:wards,
       Harisaranapur:wards,
       Koilikanya:wards,
       Manapur:wards,
       Kalibiri:wards,
       Raghurampur:wards,
       Kanthipur:wards,
       Pakhapada:wards,
       Sananauput:wards
    },
     Somapada:{
      Somapada:wards,
       Tiarasahi:wards,
       Baharabila:wards,
       Mahuladhipi:wards,
       Kumbhiput:wards,
      
    },
     Bhogoda:{
      Bhogoda:wards,
       Belanta:wards,
       Gokhanakhala:wards,
       Vejia:wards,
       Marichia:wards,
       Khajuripada:wards,
       "Grid sahi":wards,
       Paikasahi:wards,
    },
     Panchagaon:{
      Panchagaon:wards,
       Kadamasahi:wards,
       Seshagaon:wards,
       Tentuliragadi:wards,
       Popara:wards,
       Sudarsanpur:wards,
    },
    Nuapatana:{
      Gahamarasahi:wards,
       "Majhi sahi":wards,
       "Bada sahi":wards,
       "Tala sahi":wards,
       "Nalikanti sahi":wards,
       "Chasa sahi":wards,
       Sadaksahi:wards,
       "Kalapatasahi":wards,
       Surendrapatana:wards,
       Telisahi:wards,
       "Golakhpatna sahi":wards,
       "Hariballav sahi":wards,
       "Sabar sahi":wards,
       "Bidyanagari":wards,
       "Kansari sahi":wards,
       "Bali sahi":wards,
       "Phalikia sahi":wards,
      " Harijana sahi":wards,
       Mundiasahi:wards
    },
    "Puruna Tigiria":{
      "Puruna Tigiria":wards,
       Paikianra:wards,
       Amuniasahi:wards,
      " Jatiani sabarsahi":wards,
       Chasanhara:wards,
       
    },
    Jamadeipur:{
      Jemdeipur:wards,
       Pankala:wards,
      Basudevpur:wards,
       Banamalipur:wards,
       Goutampur:wards,
       Godisahi:wards,
       chinapatana:wards,
    },
    Bindhanima:{
      Bindhanima:wards,
       Sethasahi:wards,
       Hatasahi:wards,
       Damasahi:wards,
      
    },
    Nizigarh:{
      Nizigarh:wards,
     Uppargada:wards,
       Majhigada:wards,
       Talagada:wards,
       Karadapali:wards,
       Tigiria:wards,
       "Gopinathpur sasana":wards,
       "Kadalibadi sabarsahi":wards,
      
    },
  
    
  },

 "Tangi Chowdwar": {

    "Kakhadi": {
      "Bidyadharpur": wards,
      "Kakhadi": wards,
      "Mahalapada": wards,
      "Kaptabarei": wards,
      "Gopinathpada": wards
    },

    "Shankarpur": {
      "Mathasahi": wards,
      "Majhisahi": wards,
      "Benguniasahi": wards,
      "Amarabatipur": wards
    },

    "Mahisalanda": {
      "Mahisalanda": wards,
      "Machhapangi": wards,
      "Ambilajhari": wards,
      "Banto": wards,
      "Gahanda": wards,
      "Dudhianali": wards,
     
    },

    "Mangarajpur": {
      Mangarajpur: wards,
      "Bagdhara": wards,
      "Ramchandrapur": wards,
      "Patapolasahi": wards,
      "Kochilapada": wards,
      "Kochilnaugaon": wards,
      "Berena": wards
    },

    "Badasamntrapur": {
      "Badasamntarapur": wards,
      "Sardar Kharida": wards,
      "Badapadagon": wards,
      "Dianipathena": wards
    },

    "Brahmapur": {
      "Brahmapur": wards,
      "Belda": wards,
      "Kamanga": wards,
      "Kanjia": wards,
      "Jamadeipur": wards
    },
  },

 "Athagarh NAC": {
  "1": ["Hemamalapur", "Guhalapadia", "Samantasahi"],
  "2": ["Talasahi", "Tanlasahi"],
  "3": ["Gadashi", "Dhobasahi", "Pathanasahi"],
  "4": ["Keutasahi", "Muslim basti", "Damasahi", "Hadisahi","Pana sahi","Jharana chakka part","Adimata colony"],
  "5": ["Rasarashikpur"],
  "6": ["Sasana", "Block colony","Ghoda sasana","old busstand part",],
  "7": ["Upparsahi", "Kalubasti", "Uttarachandisahi","Police colony","Tanlasahi"],
  "8": ["Bautisahi", "Tanlasahi", "Puruna Busstand"],
  "9": ["Birakishorepur"],
  "10": ["Bagetsahi", "Harisaranapur", "Satichourasahi"],
  "11": ["Gaudasahi", "Bramhana sasana", "Hadisahi", "Badheitota", "Gudiasahi"],
  "12": ["Jagannath sahi", "Telisahi", "Bhagabatasahi", "Doulamandapsahi"],
  "13": ["Panasahi", "Keutasahi", "Sadarsahi", "Doulamandapsahi"],
  "14": ["Jharana chaka part", "Sabar sahi", "Medical colony", "Housing board"],
  "15": ["Banikanthanagar", "Gandhi marg"],
  "16": ["Kangada sahi", "Maitri nagar"],
  "17": ["Hatasahi", "Kantol bazar", "Bazarsahi", "Keutasahi", "Sabarasahi", "Matiasahi", "Chandiroad sahi","Satichourasahi"],
  "18": ["Ashok nagar", "Rajabati nagar"]
} 
};

export default locationMaster;
