
urunler = {
    "breakfast":[
        {
            "id":"Yumurtalı Patates",
            "calorie":"118"
        },
        {
            "id":"Yarım Yağlı Süzme Peynir ",
            "calorie":"159"
        },
        {
            "id":"Siyah Zeytin (Salamura)",
            "calorie":"368"
        },
        {
            "id":"Hellim Peyniri ",
            "calorie":"100"
        },
        {
            "id":"Labne Peyniri ",
            "calorie":"95"
        }
    ],
    "snack":[
        {
            "id":"Akceviz",
            "calorie":"612"
        },
        {
            "id":"Antep Fıstığı",
            "calorie":"562"
        },
        {
            "id":"At Kestanesi",
            "calorie":"576"
        },
        {
            "id":"Badem",
            "calorie":"575"
        },
        {
            "id":"Barbunya Fasulyesi",
            "calorie":"347"
        },
        {
            "id":"Ceviz",
            "calorie":"654"
        },
        {
            "id":"Fındık",
            "calorie":"628"
        },
        {
            "id":"Kabak Çekirdeği",
            "calorie":"559"
        },
        {
            "id":"Kaju",
            "calorie":"553"
        },
        {
            "id":"Leblebi",
            "calorie":"267"
        },
        {
            "id":"Yer Fıstığı",
            "calorie":"567"
        }
    ],
    "lunch":[
        {
            "id":"Bezelye Çorbası",
            "calorie":"75"
        },
        {
            "id":"Brokoli Çorbası",
            "calorie":"87"
        },
        {
            "id":"Domates Çorbası",
            "calorie":"30"
        },
        {
            "id":"Domatesli Pirinç Çorbası",
            "calorie":"47"
        },
        {
            "id":"Düğün Çorbası",
            "calorie":"53"
        },
        {
            "id":"Et Çorbası",
            "calorie":"33"
        },
        {
            "id":"Etli Nodel Çorbası",
            "calorie":"34"
        }
    ],
    "snackTwo":[
        {
            "id":"Akceviz",
            "calorie":"612"
        },
        {
            "id":"Antep Fıstığı",
            "calorie":"562"
        },
        {
            "id":"At Kestanesi",
            "calorie":"576"
        },
        {
            "id":"Badem",
            "calorie":"575"
        },
        {
            "id":"Barbunya Fasulyesi",
            "calorie":"347"
        },
        {
            "id":"Ceviz",
            "calorie":"654"
        },
        {
            "id":"Fındık",
            "calorie":"628"
        },
        {
            "id":"Kabak Çekirdeği",
            "calorie":"559"
        },
        {
            "id":"Kaju",
            "calorie":"553"
        },
        {
            "id":"Leblebi",
            "calorie":"267"
        },
        {
            "id":"Yer Fıstığı",
            "calorie":"567"
        }
    ],
    "eveningMeal":[
        {
            "id":"Kırmızı Et",
            "calorie":"150"
        },
        {
            "id":"Tavuk",
            "calorie":"170"
        },
        {
            "id":"Bulgur",
            "calorie":"285"
        }
    ]
}

// Kitle boy endeksi
const hesapla = () => {
    let boy = Number(document.querySelector('.').value);
    let kilo = Number(document.querySelector('.').value);
    let endeks = kilo / (boy*boy);

    if(endeks<18){
        console.log("Zayıf" + "" + endeks.toFixed(2));
    }else if(endeks>=18 && endeks<25){
        console.log("Normal" + "" + endeks.toFixed(2));
    }else if(endeks>=25 && endeks<30){
        console.log("Kilolu" + "" + endeks.toFixed(2));
    }else if(endeks>=30 && endeks<40){
        console.log("Obez" + "" + endeks.toFixed(2));
    }else{
        console.log("İleri Derece Obez" + "" + endeks.toFixed(2));
    }
}


// Öğün Listesi
toplamKalori = 2000;
const gonder = () => {
    const gunSayısı = document.querySelector('.form-control').value;
    let gunlukUrunlerListesi = [];

    for (let i = 0; i < gunSayısı; i++) {
        let gunlukUrunler = {
            breakfast: [],
            snack: [],
            lunch: [],
            snackTwo: [],
            eveningMeal: []
        };
        let gunlukKalori = 0;
        let kaloriAsildi = true;

        while (kaloriAsildi) {
            kaloriAsildi = false;
            for (let ogun in urunler) {
                let urunlerListesi = urunler[ogun];
                let rastgeleUrun = urunlerListesi[Math.floor(Math.random() * urunlerListesi.length)];
                gunlukUrunler[ogun].push(rastgeleUrun);
                gunlukKalori += parseInt(rastgeleUrun.calorie);
                gunlukKalori += gunlukUrunler[ogun].reduce((acc, curr) => acc + parseInt(curr.calorie), 0);
            }
            if (gunlukKalori > toplamKalori) {
                kaloriAsildi = true;
                gunlukKalori = 0;
                gunlukUrunler = {
                    breakfast: [],
                    snack: [],
                    lunch: [],
                    snackTwo: [],
                    eveningMeal: []
                };
            }
        }
        console.log(gunlukKalori);
        //console.log(`Gün ${i+1} ürünleri`, gunlukUrunler);
        gunlukUrunlerListesi.push(gunlukUrunler);
    }

    let tbody = document.querySelector("table tbody");
    for (let i = 0; i < gunSayısı; i++) {
        let row = tbody.insertRow(-1);
        let dayCell = row.insertCell(0);
        let breakfastCell = row.insertCell(1);
        let snackCell = row.insertCell(2);
        let lunchCell = row.insertCell(3);
        let snackTwoCell = row.insertCell(4);
        let eveningMealCell = row.insertCell(5);

        dayCell.innerHTML = i + 1;
        breakfastCell.innerHTML = gunlukUrunlerListesi[i]["breakfast"].map(u => u.id);
        snackCell.innerHTML = gunlukUrunlerListesi[i]["snack"].map(u => u.id);
        lunchCell.innerHTML = gunlukUrunlerListesi[i]["lunch"].map(u => u.id);
        snackTwoCell.innerHTML = gunlukUrunlerListesi[i]["snackTwo"].map(u => u.id);
        eveningMealCell.innerHTML = gunlukUrunlerListesi[i]["eveningMeal"].map(u => u.id);
    }
}












































// let gender = prompt("Cinsiyetinizi girin (kadın/erkek):");
// let age = prompt("Yaşınızı girin:");
// let height = prompt("Boyunuzu cm cinsinden girin:");
// let weight = prompt("Kilonuzu kg cinsinden girin:");

// let bmr;
// if (gender === "kadın") {
//   bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
// } else if (gender === "erkek") {
//   bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
// }


// let activityLevel = prompt("Aktivite seviyenizi girin (çok az/az/orta/fazla/çok fazla):");
// let dailyCalories;

// switch (activityLevel) {
//   case "çok az":
//     dailyCalories = bmr * 1.2;
//     break;
//   case "az":
//     dailyCalories = bmr * 1.375;
//     break;
//   case "orta":
//     dailyCalories = bmr * 1.55;
//     break;
//   case "fazla":
//     dailyCalories = bmr * 1.725;
//     break;
//   case "çok fazla":
//     dailyCalories = bmr * 1.9;
//     break;
//   default:
//     dailyCalories = bmr;
//     break;
// }




// toplamKalori = 2000;

// const gonder = () => {
//     const gunSayısı = document.querySelector('.form-control').value;
//     let gunlukUrunlerListesi = [];

//     for (let i = 0; i < gunSayısı; i++) {
//         let gunlukUrunler = {
//             breakfast: [],
//             snack: [],
//             lunch: [],
//             snackTwo: [],
//             eveningMeal: []
//         };
//         let gunlukKalori = 0;
//         let kaloriAsildi = true;

//         while (kaloriAsildi) {
//             kaloriAsildi = false;
//             for (let ogun in urunler) {
//                 let urunlerListesi = urunler[ogun];
//                 let rastgeleUrun = urunlerListesi[Math.floor(Math.random() * urunlerListesi.length)];
//                 gunlukUrunler[ogun].push(rastgeleUrun);
//                 gunlukKalori += parseInt(rastgeleUrun.calorie);
//                 gunlukKalori += gunlukUrunler[ogun].reduce((acc, curr) => acc + parseInt(curr.calorie), 0);
//             }
//             if (gunlukKalori > toplamKalori) {
//                 kaloriAsildi = true;
//                 gunlukKalori = 0;
//                 gunlukUrunler = {
//                     breakfast: [],
//                     snack: [],
//                     lunch: [],
//                     snackTwo: [],
//                     eveningMeal: []
//                 };
//             }
//         }
//         console.log(gunlukKalori);
//         //console.log(`Gün ${i+1} ürünleri`, gunlukUrunler);
//         gunlukUrunlerListesi.push(gunlukUrunler);
//     }
//         let breakfastList = "";
//         let snackList = "";
//         let lunchList = "";
//         let snackTwoList = "";
//         let eveningMealList = "";

//         for (let i = 0; i < gunlukUrunlerListesi.length; i++) {
//             breakfastList += gunlukUrunlerListesi[i]["breakfast"].map(u => u.id).join(", ");
//             snackList += gunlukUrunlerListesi[i]["snack"].map(u => u.id).join(", ");
//             lunchList += gunlukUrunlerListesi[i]["lunch"].map(u => u.id).join(", ");
//             snackTwoList += gunlukUrunlerListesi[i]["snackTwo"].map(u => u.id).join(", ");
//             eveningMealList += gunlukUrunlerListesi[i]["eveningMeal"].map(u => u.id).join(", ");
//         }

//         document.querySelector(".breakfastText").innerHTML += breakfastList;
//         document.querySelector(".snackText").innerHTML += snackList;
//         document.querySelector(".lunchText").innerHTML += lunchList;
//         document.querySelector(".snackTwoText").innerHTML += snackTwoList;
//         document.querySelector(".eveningMealText").innerHTML += eveningMealList;
// }

