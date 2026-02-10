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
    Chhatabara:wards,
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
    Sathio: wards,
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
    // Santanibati: wards,
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
   Kusapangi: {
   
    Kusapangi: wards,
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
    Jagaiapada: wards,
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
     Bhiruda:{
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
      Sunthipala:wards,
      Samapur:wards,
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
      
    },
     Panchagaon:{
      Panchagaon:wards,
       Kadamasahi:wards,
       Seshagaon:wards,
       Tentuliragadi:wards,
       Sudarsanpur:wards,
       Popara:wards,
      
    },
    Nuapatana:{
      Gahamarasahi:wards,
       Majhisahi:wards,
       Badasahi:wards,
       Talasahi:wards,
       Nalikanisahi:wards,
       Chasasahi:wards,
       Sadaksahi:wards,
       "Kalapata sahi":wards,
       Surendrapatana:wards,
       Mundiasahi:wards
    },
    "Puruna Tigiria":{
      "Puruna Tigiria":wards,
       Paikianra:wards,
       Amuniasahi:wards,
       Chasanhara:wards,
       
    },
    Jamadeipur:{
      Jemdeipur:wards,
       Pankala:wards,
      Basudevpur:wards,
       Banamalipur:wards,
       chinapatana:wards,
    },
    Bindhanima:{
      Bindhanima:wards,
       Sethasahi:wards,
       Hatasahi:wards,
       Damasahi:wards,
      
    },
    Nizigarh:{
     Uppargada:wards,
       Majhigada:wards,
       Talagada:wards,
       Nizigarh:wards,
       Karadapali:wards,
       Tigiria:wards,
       "Gopinathpur sasana":wards,
      
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
      "Amarabatur": wards
    },

    "Mahisalanda": {
      "Mahisalanda": wards,
      "Machhapangi": wards,
      "Ambilajhari": wards,
      "Banto": wards,
      "Gahanda": wards,
      "Dudhanali": wards,
      "Mangrajpur": wards
    },

    "Mangarajpur": {
      "Bagdhara": wards,
      "Ramchandrapur": wards,
      "Patapolasahi": wards,
      "Kochilapada": wards,
      "Kochilnaugaon": wards,
      "Berena": wards
    },

    "Badasamntapur": {
      "Sardar Kharida": wards,
      "Badapadagon": wards,
      "Dianipatna": wards
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
  "1": ["Hemamalapur", "Guhalapadia", "Santasahi"],
  "2": ["Talashahi", "Tanlasahi", "Other"],
  "3": ["Gadashi", "Dhobasahi", "Pathanasahi"],
  "4": ["Keutasahi", "Muslim basti", "Damasahi", "Harijanasahi"],
  "5": ["Rasarashikpur"],
  "6": ["Sasana", "Forest colony"],
  "7": ["Upparsahi", "Kalubasti", "Uttarachandisahi"],
  "8": ["Bautisahi", "Tanlasahi", "Puruna Busstand"],
  "9": ["Birakishorepur"],
  "10": ["Bagetsahi", "Harisaranapur", "Satichourasahi"],
  "11": ["Gaudasahi", "Brahmanasasana", "Hadisahi", "Badheitota", "Gudiasahi"],
  "12": ["Jagannath sahi", "Telisahi", "Bhagabatasahi", "Doulamandapsahi"],
  "13": ["Panasahi", "Keutasahi", "Sadarsahi", "Doulamandapsahi"],
  "14": ["Jharana chaka", "Sabar sahi", "Medical colony", "Housing board"],
  "15": ["Banikanthanagar", "Gandhi marg"],
  "16": ["Kangada sahi", "Maitri nagar"],
  "17": ["Hatasahi", "Kantol bazar", "Bazarsahi", "Keutasahi", "Sabarasahi", "Matiasahi", "Chandiroad sahi","Satichourasahi"],
  "18": ["Ashok nagar", "Rajabati nagar"]
} 
};

export default locationMaster;
