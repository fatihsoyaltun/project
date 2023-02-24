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
        let breakfastList = "";
        let snackList = "";
        let lunchList = "";
        let snackTwoList = "";
        let eveningMealList = "";

        for (let i = 0; i < gunlukUrunlerListesi.length; i++) {
            breakfastList += gunlukUrunlerListesi[i]["breakfast"].map(u => u.id).join(", ") + ", ";
            snackList += gunlukUrunlerListesi[i]["snack"].map(u => u.id).join(", ") + ", ";
            lunchList += gunlukUrunlerListesi[i]["lunch"].map(u => u.id).join(", ") + ", ";
            snackTwoList += gunlukUrunlerListesi[i]["snackTwo"].map(u => u.id).join(", ") + ", ";
            eveningMealList += gunlukUrunlerListesi[i]["eveningMeal"].map(u => u.id).join(", ") + ", ";
        }

        document.querySelector(".breakfastText").innerHTML += breakfastList;
        document.querySelector(".snackText").innerHTML += snackList;
        document.querySelector(".lunchText").innerHTML += lunchList;
        document.querySelector(".snackTwoText").innerHTML += snackTwoList;
        document.querySelector(".eveningMealText").innerHTML += eveningMealList;
}