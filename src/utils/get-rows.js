export const create_data_array = () => {
    //ToDo convert this in a array and use it as a constant
    const table_str = "VL35;Glovelier;run-of-river;46.105880590640965;7.809260581732722\n" +
        "PS30;Val Müstair;substation;47.122019937323586;9.495241588461534\n" +
        "JG74;Randa;substation;46.27953008495016;8.125980293035418\n" +
        "XM89;Lachen;pumped storage;46.6898254440166;8.453197685017164\n" +
        "WX82;Silvaplana;pumped storage;46.694093435129375;7.664700606681028\n" +
        "CO92;Murten;run-of-river;46.6144118832204;8.790512269467408\n" +
        "ML77;Hausen (AG);run-of-river;46.822204619765365;9.313049671056888\n" +
        "FY44;Iseltwald;substation;46.33994835900653;7.406591526039803\n" +
        "TH25;Avers;run-of-river;46.466611088433126;9.41698860990919\n" +
        "QF50;Matten bei Interlaken;run-of-river;46.14064736462065;7.85553474710712\n" +
        "RP60;Commugny;run-of-river;47.641152077957564;7.902870367675604\n" +
        "AF12;Bister;pumped storage;46.48408072302925;7.558452643668749\n" +
        "CZ68;Hausen am Albis;run-of-river;46.20893692806749;8.804091985005808\n" +
        "ZJ63;Unterbözberg;pumped storage;47.536944122933036;8.704278540017636\n" +
        "LU20;Auvernier;substation;46.547946631413;9.413029667658554\n" +
        "XB45;Les Brenets;substation;47.47544175468729;7.879121053653443\n" +
        "HK75;Alchenstorf;run-of-river;46.8214288191011;7.929314912952108\n" +
        "NX94;Cadempino;substation;46.612481429638116;7.680969199487459\n" +
        "NP89;Schöfflisdorf;substation;47.377711521622615;7.868286272468115\n" +
        "WR44;Hasliberg;run-of-river;47.68592233285168;7.967743229075124\n" +
        "HU84;Leysin;pumped storage;47.215893826097826;8.789266827107337\n" +
        "PJ70;Thayngen;pumped storage;47.57068717239411;8.576338771398515\n" +
        "DM24;Därligen;pumped storage;46.13923789402519;7.359029948881343\n" +
        "CI93;Penthalaz;pumped storage;47.34640852457988;8.817084383428053\n" +
        "LA37;Vaulion;substation;47.08061839220446;8.991640668778514\n" +
        "SK97;Ormont-Dessous;run-of-river;46.53355951421021;7.6976260399171155\n" +
        "VB11;Hersiwil;run-of-river;46.28992625245328;9.208985820489842\n" +
        "QK19;La Sarraz;substation;46.842628404194585;8.663753038377141\n" +
        "KL49;Blenio;run-of-river;46.19773696347628;8.954532219051584\n" +
        "YP32;Lugnez;run-of-river;47.5662511207526;8.287846980361824\n" +
        "WX31;Gams;run-of-river;46.34619764293609;9.604112777783929\n" +
        "ZL93;Koppigen;pumped storage;46.34153434947357;7.714523372141845\n" +
        "XT78;Aedermannsdorf;substation;46.54962281291511;9.051822271855425\n" +
        "JW64;Zuzwil (BE);run-of-river;46.16870797560413;8.074385735279389\n" +
        "EK16;Laufenburg;substation;46.67833348143394;8.920400459245744\n" +
        "BJ14;Courchavon;substation;47.69935271940966;7.667196895548297\n" +
        "RJ17;Bioley-Orjulaz;substation;47.12750376311528;9.555690376681365\n" +
        "EH61;Wilen (TG);substation;46.67664813994682;7.918258437326994\n" +
        "ZI61;Leytron;pumped storage;47.52659986282038;7.96653325793835\n" +
        "IQ32;Oppligen;pumped storage;46.92421266466457;8.016532167160573\n" +
        "BD73;Ormont-Dessous;substation;46.474020412082496;9.095995195682853\n" +
        "HJ35;Martigny;run-of-river;46.75327268597999;7.456881948902572\n" +
        "OR61;Birgisch;pumped storage;47.16444172130096;7.5709069659125126\n" +
        "BQ31;Ramlinsburg;pumped storage;47.48406259322752;8.006379279940417\n" +
        "PV92;Sisikon;substation;47.6142851349942;9.676818859467401\n" +
        "EB59;La Verrerie;pumped storage;47.12894799805597;8.535337504482262\n" +
        "BH40;Kehrsatz;substation;46.24451699955073;7.7928646788381695\n" +
        "YW96;Veyrier;run-of-river;46.15860492061084;8.501164160575259\n" +
        "EP39;Hundwil;run-of-river;46.492841038536795;7.312482824406916\n" +
        "IO36;Mettmenstetten;pumped storage;47.187466355183155;7.417887469913276\n" +
        "OD15;Marchissy;run-of-river;46.16341832418045;8.201591694614383\n" +
        "LV62;Chapelle-sur-Moudon;run-of-river;47.235775775200715;9.66297903603916\n" +
        "JW59;Muriaux;substation;47.0757193636332;8.088351283621794\n" +
        "TS59;Oberwil (BL);substation;47.46990147838662;8.252517526363604\n" +
        "AY83;Villars-Tiercelin;substation;46.45074897456493;9.353547464812912\n" +
        "XE87;Cuarny;run-of-river;46.41419579095775;7.4104841007658155\n" +
        "GC66;Brüttelen;substation;47.183602672337045;8.462583020284633\n" +
        "ZR47;Villars-Epeney;run-of-river;46.76891770461291;9.456627101719203\n" +
        "OQ82;Langwies;run-of-river;46.451067116852954;9.337499249084612\n" +
        "II61;Meyrin;substation;47.15075317276308;7.365457273382953\n" +
        "BT29;Courtedoux;run-of-river;46.86430369604022;9.35061318591631\n" +
        "ZD24;Golaten;pumped storage;46.21661414968348;7.720054400784859\n" +
        "QN15;Islisberg;substation;47.66728281155638;8.817744178978034\n" +
        "TZ14;Lupsingen;substation;46.46027708810039;9.62661934582935\n" +
        "EF26;Visp;run-of-river;46.806403378115505;8.222770814874908\n" +
        "II78;Stallikon;substation;47.73122244214174;8.215468281752148\n" +
        "PA75;Chessel;pumped storage;46.84358082484969;9.57727806120268\n" +
        "GT41;Cormoret;pumped storage;46.31473921374161;9.506234604829652\n" +
        "TR19;Glarus Süd;pumped storage;47.467875323572116;8.15987611475786\n" +
        "HB74;Killwangen;run-of-river;46.51590423985111;8.344951221192977\n" +
        "CU69;Giornico;run-of-river;46.43694743442849;8.858436446238077\n" +
        "TE82;Auenstein;run-of-river;46.67208716983264;8.180341676879458\n" +
        "LQ80;Remigen;substation;46.11843787940243;7.384366851027321\n" +
        "HS63;Siat;run-of-river;47.16414105941172;7.507971357695724\n" +
        "QU67;Gland;substation;47.621143892220786;8.8594868445326\n" +
        "AJ85;Carabietta;run-of-river;47.137999871621055;8.537410092287956\n" +
        "QC50;Oberbipp;pumped storage;47.01907085268812;9.671352738068565\n" +
        "FS52;Eichberg;run-of-river;46.4176503111542;9.322315854047012\n" +
        "DD81;Rottenschwil;run-of-river;47.109228822407516;7.679587826808533\n" +
        "LD57;Lommiswil;substation;46.27332163095042;9.669709260441422\n" +
        "UM48;Sévaz;run-of-river;47.06355320725034;9.447912597817465\n" +
        "TP35;Murgenthal;substation;47.594586639375095;9.225465254688622\n" +
        "KS26;Erlen;substation;47.66998687978291;9.044385508893734\n" +
        "SP47;Mex (VS);run-of-river;46.25907754459271;8.429128584458173\n" +
        "NO96;Vallon;substation;47.22245504443075;8.503204411215286\n" +
        "NE46;Gallenkirch;substation;47.61011536657712;8.586837003328334\n" +
        "XW56;Schlierbach;pumped storage;46.56266442517529;7.71900383001356\n" +
        "UB41;Rohrbach;substation;47.069529578396704;9.556956900164693\n" +
        "SV87;Innertkirchen;run-of-river;46.38057562048045;7.571428225277771\n" +
        "SY22;Grandevent;run-of-river;47.45982334049498;8.486655100587608\n" +
        "SQ70;Enges;substation;46.26546377256116;7.999764610615076\n" +
        "KB95;Cheseaux-sur-Lausanne;run-of-river;47.558324850647175;7.551574580092577\n" +
        "FH91;Mendrisio;pumped storage;46.68891605011569;7.6448824503786295\n" +
        "NN96;Elgg;run-of-river;46.92195040417362;7.27620398120133\n" +
        "LK16;Bevaix;run-of-river;47.1492704289819;7.265299166956329\n" +
        "CB29;Rain;run-of-river;46.2645099261387;8.30104155661937\n" +
        "SQ49;Soulce;substation;47.26193070964681;7.88643639049153\n" +
        "IC46;Göschenen;run-of-river;46.661293378580325;8.04060159085484\n" +
        "RE87;Kloten;substation;46.50856235049472;7.67039707104578\n" +
        "UW37;Develier;pumped storage;47.16570623368174;7.473737623519047\n" +
        "GZ61;Horrenbach-Buchen;run-of-river;46.1861751072258;9.47238560433599\n" +
        "UO37;Hirzel;run-of-river;47.096464493911725;8.933878133947456\n" +
        "DG83;Altendorf;substation;46.82721463358369;9.13997203963656\n" +
        "CH94;Lauerz;pumped storage;46.352557362293624;7.61551331002975\n" +
        "UK27;Bürglen (TG);run-of-river;47.605373018827066;9.562934897909129\n" +
        "UG78;Betten;pumped storage;47.518981218460375;7.464081305348161\n" +
        "MM41;Riex;pumped storage;47.535663265797545;7.9757018952152015\n" +
        "WY78;Thürnen;pumped storage;47.18102217797129;7.3347035105120115\n" +
        "ME72;Aigle;pumped storage;46.57613172995671;8.249136749498266\n" +
        "XK55;Bioley-Orjulaz;substation;46.26975785172344;9.315932848919003\n" +
        "OR70;Faoug;run-of-river;46.48378540826547;8.711287712959999\n" +
        "FH66;Pregny-Chambésy;pumped storage;46.09000241184752;8.581536330779905\n" +
        "PT94;Isérables;pumped storage;46.41884621860112;9.464108934269273\n" +
        "QK95;Wil (SG);substation;47.572524461787246;9.120069739147475\n" +
        "LV64;Bioley-Orjulaz;substation;46.19131572367837;7.344867001240784\n" +
        "IY23;Speicher;substation;46.7012607819683;7.80898532534297\n" +
        "ZB44;Elsau;substation;47.33205720557896;7.842750179716457\n" +
        "RT44;Rüschegg;run-of-river;46.392206821725004;7.238217704137311\n" +
        "KZ73;Chardonne;pumped storage;46.69802653279791;8.683385035343028\n" +
        "RD82;Muzzano;pumped storage;47.542631780442875;8.459162647182115\n" +
        "NM35;Échallens;substation;47.35533128168984;7.830859675121284\n" +
        "KY15;Warth-Weiningen;pumped storage;47.41939612811509;9.502668746786537\n" +
        "CS28;Widnau;substation;46.36225024244827;9.06673051559936\n" +
        "RU40;Selzach;run-of-river;46.595335158626945;7.4367215491544965\n" +
        "VH92;Schwellbrunn;pumped storage;47.23683797851253;9.167673241993693\n" +
        "VB74;Birwinken;run-of-river;46.38495122619731;9.078835172979527\n" +
        "XJ93;Böbikon;pumped storage;46.24743383503949;8.548712953285676\n" +
        "XR51;Zofingen;run-of-river;46.42237642969325;8.900157574154703\n" +
        "KE91;Anzonico;substation;46.20325090738401;8.464323491921334\n" +
        "QU90;Vallorbe;substation;47.49155481670716;7.804401405127898\n" +
        "JM60;Trun;run-of-river;46.867873782572914;8.92738339367182\n" +
        "VI70;Penthéréaz;substation;46.146804919549815;9.202152120296626\n" +
        "EQ17;Frutigen;pumped storage;47.4763453200068;9.537470843586528\n" +
        "GK21;Weinfelden;substation;46.759798782295064;8.53413201796986\n" +
        "JQ66;Binn;substation;46.539386922665024;7.430348241449705\n" +
        "QX54;Villars-le-Terroir;pumped storage;47.18213263436118;8.085546286028755\n" +
        "NZ68;Valangin;run-of-river;46.443886616471694;9.013870819797363\n" +
        "LO44;Blauen;run-of-river;46.56497406523169;8.984652608745808\n" +
        "WF20;Farvagny;substation;47.09062456589452;8.024629200118103\n" +
        "MB86;Merzligen;run-of-river;47.5656052234019;8.683570321159868\n" +
        "EJ67;Kirchberg (SG);run-of-river;46.978959466707856;9.364584217234857\n" +
        "NI37;Gretzenbach;pumped storage;46.12369362272907;7.579216955227271\n" +
        "GW92;Fideris;pumped storage;47.149788275467415;7.506206073954982\n" +
        "TH54;Moudon;run-of-river;46.32310326256303;7.525518350141213\n" +
        "OT19;Riemenstalden;pumped storage;46.65069070533947;8.665305105725345\n" +
        "YX43;Fislisbach;substation;47.66202499912902;8.265264003416402\n" +
        "OE67;Möriken-Wildegg;pumped storage;47.31506932384028;8.372345703015023\n" +
        "JZ25;Frauenkappelen;substation;47.27157203841201;7.297550441437917\n" +
        "SP90;Uttwil;substation;46.831311627226114;8.083280946095353\n" +
        "VI50;Bern;run-of-river;47.64104877455025;9.628116237404583\n" +
        "XE72;Rapperswil (BE);run-of-river;46.08971732984898;8.386128383292808\n" +
        "KM17;Les Agettes;run-of-river;46.737878064922306;8.085108809238864\n" +
        "VV90;Nunningen;substation;47.72373367722205;8.996698011185096\n" +
        "JS80;Fahrni;run-of-river;47.0473966284035;7.9426116672487534\n" +
        "KA21;Ohmstal;substation;46.096353596838085;8.781221451625001\n" +
        "MH65;Ballwil;run-of-river;46.85732357449103;8.479536954717378\n" +
        "DK19;Untereggen;substation;46.56777255076141;7.262448527454841\n" +
        "YM10;Campello;substation;47.14068272695774;8.796904288060777\n" +
        "RQ53;Brione sopra Minusio;pumped storage;46.746952802332686;8.806018335129197\n" +
        "MB37;Fontenais;run-of-river;46.36755630270177;8.540217354950764\n" +
        "YM81;Mezzovico-Vira;run-of-river;46.33565488999539;7.624622599970751\n" +
        "YD83;La Praz;run-of-river;47.500915063394956;8.965538626409575\n" +
        "TX85;Versoix;run-of-river;47.12174696884526;7.730428933079278\n" +
        "VH44;Bretonnières;substation;47.72282233526251;8.619549844806729\n" +
        "YX67;Dizy;run-of-river;47.48924972315145;9.425182450956031\n" +
        "GM89;Lauerz;substation;46.33077539343666;8.348537876194552\n" +
        "XD25;Mergoscia;substation;46.33713141595345;9.323432405206741\n" +
        "FC48;Erlenbach (ZH);pumped storage;46.671188183170365;8.549454208116797\n" +
        "YH11;Malvaglia;pumped storage;46.16313320801943;8.74778762279144\n" +
        "KM23;Mézières (FR);run-of-river;46.49901517772098;8.716765259330158\n" +
        "OT86;Büren zum Hof;pumped storage;47.53472834625708;7.652035944328306\n" +
        "DH77;Schötz;run-of-river;46.788428617662746;8.612946439593058\n" +
        "ST77;Cauco;substation;46.83222658913011;9.257261108506096\n" +
        "UU70;Les Brenets;substation;46.421303082455246;8.620433029466072\n" +
        "XN69;Windisch;run-of-river;46.493452969442636;8.668222102253797\n" +
        "JG77;Grens;substation;46.19360952384968;7.52012740552302\n" +
        "LN80;Sobrio;run-of-river;46.375807419538454;8.377137222478645\n" +
        "RH48;Diepflingen;pumped storage;46.24446064327691;9.617209075349667\n" +
        "SB73;Burgdorf;pumped storage;47.70926444072356;9.388324439899858\n" +
        "ZP50;Andeer;pumped storage;47.097610245386186;7.430416581891855\n" +
        "GH11;Cuarnens;substation;47.23464363175969;7.277000672596739\n" +
        "EP24;Avry;substation;46.304171037338556;9.103152069708154\n" +
        "ML83;Tentlingen;substation;47.335724879759255;7.907111493216949\n" +
        "AK11;Certara;pumped storage;46.52165314904476;8.165938022428037\n" +
        "GE42;Oberrüti;pumped storage;47.37991344749181;9.042140487608874\n" +
        "QP18;Orselina;run-of-river;46.48742665381024;7.885337818064247\n" +
        "HW52;Walzenhausen;pumped storage;46.086342324948816;8.191268497628316\n" +
        "FA86;Onex;pumped storage;46.43906653950817;7.463797962175163\n" +
        "NN81;Eggiwil;run-of-river;47.673041253902426;8.067050017414568\n" +
        "YS34;Maggia;pumped storage;47.34470619609816;9.533552002198093\n" +
        "WX97;Bauma;run-of-river;47.584351226826904;9.238710792734196\n" +
        "VA19;Thierrens;run-of-river;47.7099055222451;9.204221069324996\n" +
        "UZ28;Gurtnellen;pumped storage;46.851515546629095;7.453890089742499\n" +
        "CM63;Cama;run-of-river;46.68164764099252;9.504430716187972\n" +
        "NF15;Blitzingen;run-of-river;47.72437096332547;8.278419759259933\n" +
        "SR12;Röschenz;run-of-river;46.53157307283104;7.705250838178124\n" +
        "KH51;Céligny;pumped storage;47.51849298346065;7.373336623105973\n" +
        "KM27;Biezwil;substation;47.07441726760224;7.932371035873823\n" +
        "IF10;La Folliaz;substation;46.26780602979651;7.573075579955292\n" +
        "FL20;Oulens-sous-Échallens;run-of-river;46.90672173768007;8.208681128466683\n" +
        "XI81;Grandson;run-of-river;47.63413103475401;8.854838288007674\n" +
        "FN50;Lyssach;substation;46.15526994689927;9.254345825458454\n" +
        "FY28;Vilters-Wangs;run-of-river;47.071485923123674;8.802713843104748\n" +
        "UG67;Furna;pumped storage;47.56481406469053;9.646787837546725\n" +
        "MU26;Iseltwald;run-of-river;46.964686880764056;7.683456612213441\n" +
        "HC10;Hölstein;pumped storage;46.46218035106775;9.03789700144923\n" +
        "BH76;Flerden;substation;46.58165736901842;8.699055168027531\n" +
        "PH14;Walchwil;substation;46.08843759758155;7.9878398566112985\n" +
        "RL39;Wittnau;pumped storage;47.52610943132862;9.099149072170462\n" +
        "LR48;Engollon;substation;47.6277007546783;8.55998713686006\n" +
        "BC23;Dorénaz;substation;46.500086642190475;8.472473316412543\n" +
        "BJ76;Missy;run-of-river;46.312313942551484;8.638292779178148\n" +
        "NV78;Gottlieben;substation;47.32716939813513;8.607057287724942\n" +
        "MB28;Arvigo;run-of-river;46.30094148555792;9.208471003305233\n" +
        "MR22;Donat;pumped storage;46.803365984957715;8.478431034575134\n" +
        "IF25;Mirchel;substation;47.751905508699984;8.516412848933903\n" +
        "MV49;Egerkingen;pumped storage;47.00184412476046;8.495715643091678\n" +
        "OP32;Freienwil;pumped storage;46.89760318403634;9.260086031062293\n" +
        "UM92;Penthaz;pumped storage;47.19106112767393;8.752363990358539\n" +
        "JZ83;Beinwil (SO);pumped storage;46.17274325758182;9.020895773676951\n" +
        "WF64;Duvin;substation;46.97108744986711;7.911870616561041\n" +
        "OW25;Hägglingen;pumped storage;47.21971562615871;8.697123951032637\n" +
        "PU23;Morlon;pumped storage;46.24179034797685;9.283768842930654\n" +
        "YH37;Ladir;run-of-river;47.155861702924234;9.109475103069606\n" +
        "AE49;Sorvilier;pumped storage;46.16611000506311;8.980841330391167\n" +
        "PE17;Port;run-of-river;46.965027839505076;7.5668953805792425\n" +
        "OR36;Chézard-Saint-Martin;run-of-river;47.06461538743452;8.974209414922171\n" +
        "FZ53;Thörigen;substation;46.37792616430721;9.07457809925637\n" +
        "KL31;St. Gallen;pumped storage;46.47117245817784;8.641593738142745\n" +
        "AI38;Ballens;substation;47.609021112485195;8.131836850197024\n" +
        "XR79;Hausen (AG);substation;47.079593881455736;7.332945896350608\n" +
        "LC77;Ormalingen;pumped storage;46.82851170221508;9.466190675674044\n" +
        "DF93;Schwadernau;pumped storage;46.46321990311594;8.735666588241457\n" +
        "TF72;Villarzel;run-of-river;46.80189116227506;7.783401486267167\n" +
        "SZ16;Dalpe;substation;47.64893692918832;9.177840579733147\n" +
        "UN64;Reconvilier;run-of-river;47.37088033633875;7.802169281499206\n" +
        "AA91;St. Gallen;pumped storage;46.514587612423;8.972136612197993\n" +
        "MB26;Salvenach;substation;46.277523806911894;8.60805113906888\n" +
        "NR80;Römerswil;run-of-river;46.3035443847049;7.646140193588639\n" +
        "GN80;Niederglatt;run-of-river;46.51643958428316;7.385145931057919\n" +
        "DW76;Écublens;pumped storage;47.096947720377365;7.627772171193486\n" +
        "FZ96;Rheinau;pumped storage;47.221951852740425;7.314965692946723\n" +
        "DM85;Bogis-Bossey;pumped storage;47.42665419869042;9.68138706860263\n" +
        "DC53;Champtauroz;pumped storage;46.83121793844518;7.884546028753843\n" +
        "OO93;Cadenazzo;run-of-river;46.456576201663076;9.632679525456288\n" +
        "PB55;Truttikon;substation;46.30191197588904;7.722994971333234\n" +
        "AR71;Champagne;run-of-river;46.468843836847235;8.083394099107728\n" +
        "RO86;Seftigen;substation;46.6604699387508;7.3469346599146945\n" +
        "MW13;Rüfenach;run-of-river;46.71915974319836;7.878370860450679\n" +
        "NM50;Rehetobel;pumped storage;47.02643989270598;7.622886980952662\n" +
        "WL43;Grancia;substation;47.599018335165425;8.347089330754496\n" +
        "MF34;Hochdorf;pumped storage;46.12022437334438;9.286921896169055\n" +
        "WY97;Meggen;substation;46.18759880133281;9.535875081345129\n" +
        "OM27;Montmagny;pumped storage;46.72697150037117;7.751798495629761\n" +
        "TC66;Moosleerau;pumped storage;46.54907028985396;9.525960607007619\n" +
        "TU90;Ostermundigen;substation;47.025670858072075;8.029310406619\n" +
        "ZH32;Botterens;run-of-river;46.105174990170006;9.077281643677093\n" +
        "AR42;Châtillon (JU);pumped storage;46.50171764561732;8.882188335092271\n" +
        "UR87;Wäldi;run-of-river;47.14434354572106;9.262407125910862\n" +
        "SK43;Juriens;run-of-river;47.48800505506153;8.778870597792993\n" +
        "VN84;Turgi;substation;47.01671634785607;9.462989507283186\n" +
        "KS27;Aclens;pumped storage;47.590627312836254;7.91728605330148\n" +
        "GN41;Saint-Prex;substation;47.38947995215298;9.389421223514217\n" +
        "EZ65;Lohn-Ammannsegg;run-of-river;46.90725289907665;8.234611336345933\n" +
        "AA50;Seftigen;pumped storage;46.71251883561405;8.998062747027182\n" +
        "TM91;Lodrino;pumped storage;47.66473750547754;9.573204676646629\n" +
        "TR53;Teuffenthal (BE);run-of-river;46.86844870906372;7.544132700653755\n" +
        "FN68;Avenches;substation;47.249729686422505;8.387737468082495\n" +
        "NB39;Flims;run-of-river;47.210635121804096;8.280310915184199\n" +
        "TW12;Romanel-sur-Lausanne;pumped storage;46.677187113980665;7.327350109606902\n" +
        "MV57;Mergoscia;substation;46.778130757701064;7.415483211821794\n" +
        "GR68;Rain;run-of-river;46.84318062201083;7.5861762951612866\n" +
        "GG46;Sottens;pumped storage;47.25945242943333;8.747174857499337\n" +
        "MM63;Gravesano;pumped storage;47.64078981128978;7.390816764275164\n" +
        "WP58;Novalles;pumped storage;47.30944526319419;8.35866890932063\n" +
        "KM19;Schneisingen;substation;46.85916368662302;7.508874249488177\n" +
        "BN98;Autafond;run-of-river;46.896179125183025;7.4716295626304365\n" +
        "FI27;Deitingen;substation;47.32796406996724;7.867785504310878\n" +
        "US26;Nennigkofen;run-of-river;46.78886057769245;9.563916000025234\n" +
        "DQ72;Kerzers;pumped storage;46.44902714263414;9.665957134284916\n" +
        "BB23;Grüningen;pumped storage;46.95736894620277;8.540923720525244\n" +
        "OO24;Valeyres-sous-Rances;run-of-river;47.31456621411185;8.891486709479281\n" +
        "IT72;Bioley-Magnoux;substation;47.38874939065107;8.155746997353171\n" +
        "QO62;Novalles;substation;46.212385900366115;9.587028341582275\n" +
        "SG22;Lavigny;run-of-river;46.94162228787378;9.560769527873042\n" +
        "UE71;Rüti bei Büren;pumped storage;46.401275131894295;7.436953717924256\n" +
        "BZ14;Rüegsau;run-of-river;47.75128854225512;9.558089316608655\n" +
        "HT57;Chabrey;substation;46.81362311544063;9.156909087344749\n" +
        "YD80;Vendlincourt;run-of-river;47.26761470657712;8.802496411034067\n" +
        "WN76;Zullwil;run-of-river;47.74321629333016;7.594756448261497\n" +
        "EN61;Valendas;substation;46.182666749106126;8.835488031195643\n" +
        "HJ72;Matzendorf;substation;47.72446100416727;9.476725471506494\n" +
        "BW96;Ellikon an der Thur;substation;47.24098180630408;9.637156362185372\n" +
        "BY58;Dornach;pumped storage;46.61998919025729;7.715319006692596\n" +
        "XI65;Tartegnin;pumped storage;46.25275536983315;9.396749266778775\n" +
        "PA64;Lavin;pumped storage;46.371464188432604;8.568582826207388\n" +
        "OR19;Monible;pumped storage;46.89795203085456;8.374665333325654\n" +
        "JG85;Niederdorf;pumped storage;47.45066962209505;7.873823941107319\n" +
        "HQ17;Glarus Nord;substation;46.106771227658136;9.173606244500087\n" +
        "MT66;Cerniat (FR);pumped storage;46.259408450851495;9.201738391150327\n" +
        "TC24;Maienfeld;substation;46.25857335306126;9.315782805888766\n" +
        "TZ19;Schlossrued;run-of-river;47.6638314929392;9.484914074070469\n" +
        "AS28;Knutwil;pumped storage;47.53096364092742;8.869370085458012\n" +
        "WP70;Borex;pumped storage;46.64300933128605;8.517272357520696\n" +
        "BI19;Novazzano;substation;46.678793794924566;7.83027876148027\n" +
        "TB73;Miglieglia;run-of-river;46.101598648823305;9.62047750822483\n" +
        "CE15;Arni (BE);substation;47.522856331089564;8.17547254427992\n" +
        "KH23;Thal;pumped storage;47.649097302748004;8.662917602093962\n" +
        "EY27;Saint-Maurice;run-of-river;47.11012304710237;8.393012701649159\n" +
        "RR20;Forel (Lavaux);pumped storage;46.11637711929174;9.310200896878907\n" +
        "EA39;Avry;run-of-river;47.71448012835548;7.826779705986897\n" +
        "HV74;Noville;pumped storage;46.899149163545516;7.846644578209663\n" +
        "CT38;Collex-Bossy;substation;46.70282383252184;9.19669178752541\n" +
        "PT94;La Chaux (Cossonay);run-of-river;46.58376525425004;8.609439826496503\n" +
        "FG22;Dachsen;run-of-river;46.42778022855942;7.606054098567995\n" +
        "JP22;Bettwil;substation;46.214159092270975;8.729432290193216\n" +
        "XO10;St. Antönien;run-of-river;47.65209383471305;9.272605036938142\n" +
        "BR80;Andwil (SG);substation;47.363026457135604;7.871488762743289\n" +
        "MR43;Bure;run-of-river;47.11857176784059;9.161691392552479\n" +
        "FI15;Meienried;substation;46.44736743418089;8.28177356493893\n" +
        "ES48;Jongny;pumped storage;46.09727238796611;9.257083289492341\n" +
        "ZF34;Schwaderloch;run-of-river;47.12287680343786;7.305252747223255\n" +
        "YR80;Bolken;run-of-river;46.29356456689353;8.478578272921107\n" +
        "PO88;Prêles;pumped storage;47.326885788218185;9.446642473254864\n" +
        "KX63;Morrens (VD);run-of-river;47.02933273436857;9.093017988095626\n" +
        "CT89;Ormont-Dessus;run-of-river;47.186997257180096;7.864506045405742\n" +
        "OJ68;Bünzen;pumped storage;47.388901204968256;7.50093783109681\n" +
        "TS19;Göschenen;substation;47.64413576527844;9.50149764686327\n" +
        "OB70;Saint-Barthélemy (VD);run-of-river;46.38052702606624;8.356452658425875\n" +
        "RK69;Dörflingen;pumped storage;46.82713377923206;8.57064751073998\n" +
        "KT60;Linn;run-of-river;46.09184782361684;8.043120930802365\n" +
        "OD52;Krinau;substation;47.7533520023605;8.82501556216249\n" +
        "SX84;Feldbrunnen-St. Niklaus;pumped storage;47.154346916544604;8.459180836576731\n" +
        "KT32;Vulliens;substation;46.466412259707106;9.477888982947745\n" +
        "AI21;Lützelflüh;pumped storage;47.077351166550926;8.210008219788353\n" +
        "YS76;Oron-le-Châtel;pumped storage;47.3906163006047;7.905164352320096\n" +
        "OM32;Prilly;substation;47.02340026943109;7.591804376077242\n" +
        "TS39;Breitenbach;substation;47.168335886141605;8.938232541552816\n" +
        "XI81;Vaz/Obervaz;pumped storage;47.19516632126979;7.585251691672401\n" +
        "VG14;Ederswiler;substation;46.390857738128304;7.7972204215257035\n" +
        "RL33;Glarus Nord;pumped storage;47.503219557033795;7.559396538135945\n" +
        "IT11;Coldrerio;run-of-river;47.08184044574942;7.872901413180658\n" +
        "KT10;Oberkirch;substation;47.497553088786816;8.989269846975473\n" +
        "SN15;Trüllikon;pumped storage;47.38519505107206;7.357621151780608\n" +
        "UT12;Däniken;run-of-river;47.73287095105853;7.431489046064167\n" +
        "BA40;Altbüron;substation;46.83442388592104;9.111004066633022\n" +
        "IU94;Roches (BE);pumped storage;47.143275784206274;7.667926111447369\n" +
        "EA40;Rubigen;substation;47.53258643151348;7.935742298323247\n" +
        "WM92;Lauenen;pumped storage;47.698668269261624;8.757942963859115\n" +
        "AV14;Orpund;run-of-river;46.24693257277163;8.20490675051718\n" +
        "UM41;Willadingen;substation;47.38958573760519;9.068014283065759\n" +
        "RQ89;Steinach;substation;47.081186738222975;9.401080876399138\n" +
        "JN31;Leggia;run-of-river;46.86883935444712;8.366159148353498\n" +
        "ML93;Saint-Légier-La Chiésaz;run-of-river;46.72896408420297;9.560517544934982\n" +
        "UM38;Bettwil;pumped storage;46.45379574354249;8.533035774848354\n" +
        "ST34;Roveredo (GR);run-of-river;47.10665102955207;8.78840904700886\n" +
        "CF66;Auenstein;substation;46.29676344452934;9.421130683367604\n" +
        "LM35;Büttenhardt;run-of-river;46.34068033691096;8.806187140696494\n" +
        "SS45;Langendorf;substation;47.63601912449655;9.618396539635679\n" +
        "PF61;Maisprach;run-of-river;46.601302000879784;7.789116697530891\n" +
        "CH42;Heimenhausen;run-of-river;46.49292468503264;9.12347087724006\n" +
        "YS50;Vechigen;run-of-river;46.87784059307316;8.64646946909067\n" +
        "RS72;Eriswil;substation;47.180419843872784;7.538071367102477\n" +
        "OC49;Saint-Imier;pumped storage;47.105720547253725;9.024283662962684\n" +
        "ST34;Mont-la-Ville;substation;47.37207471702348;9.324849668650323\n" +
        "IB65;Habkern;run-of-river;46.81024065255093;8.248733258556296\n" +
        "YO27;Mettmenstetten;substation;47.18406445557425;7.513984703921436\n" +
        "SE87;Bürchen;substation;46.954913284807134;9.674074929817744\n" +
        "QW83;Trient;run-of-river;47.745028917539656;9.423355282490434\n" +
        "OJ77;Fiesch;substation;46.15858557560808;7.212169867472726\n" +
        "PC12;Winznau;substation;47.53123413419621;8.406591525764114\n" +
        "MU23;Fehraltorf;substation;47.265813986730066;7.7404835489592685\n" +
        "YP97;Felsberg;substation;46.31061238073802;7.549567364847613\n" +
        "DJ60;Crans-près-Céligny;substation;46.79049778949833;7.469981273894503\n" +
        "BQ62;Stein (SG);run-of-river;46.3264511392589;7.911469099685822\n" +
        "XC11;Niederbüren;substation;46.670745420710816;9.593850766438479\n" +
        "TA42;Hundwil;substation;46.99188503951755;9.012324547796162\n" +
        "RG24;Biberstein;substation;46.48236423557689;9.426444408510683\n" +
        "VQ26;Horw;substation;47.08075290619375;8.47941703250382\n" +
        "XI43;Walperswil;run-of-river;47.36177917804805;8.117012848296433\n" +
        "CU28;Krauchthal;pumped storage;46.30297620079737;8.44446116358731\n" +
        "OE11;La Sonnaz;pumped storage;46.251050637073945;8.606662435186864\n" +
        "JT38;Montana;pumped storage;46.19520910745375;7.314443276047325\n" +
        "ZG58;Peney-le-Jorat;pumped storage;46.53283538032179;8.499480012450517\n" +
        "AR31;Hüniken;substation;46.802454390718104;9.620384884685805\n" +
        "TQ75;Gelterfingen;substation;46.16645135153425;8.265216423026493\n" +
        "PA40;Chavannes-sur-Moudon;pumped storage;46.630619305368704;7.441227086797342\n" +
        "LC44;Souboz;run-of-river;46.42095977798262;7.31048351467255\n" +
        "NV49;Chesalles-sur-Oron;substation;47.25018269165665;8.039298649963643\n" +
        "TF53;Galgenen;substation;47.68955296791813;7.648019228556584\n" +
        "NX34;Muri bei Bern;run-of-river;46.6034285438701;9.077683984623192\n" +
        "QY21;Renens (VD);pumped storage;47.168613287406615;7.918158524652145\n" +
        "AW71;Cham;pumped storage;46.5886782317863;8.736434697939966\n" +
        "IE81;Mergoscia;run-of-river;46.39724548266485;7.309593308158773\n" +
        "BF75;Saint-Brais;run-of-river;46.731615533958944;9.102050701697502\n" +
        "NE35;Hüniken;substation;47.09988534480211;9.374296266675124\n" +
        "IR45;Gingins;pumped storage;46.44678532097993;7.584483253085866\n" +
        "EF55;Satigny;pumped storage;46.42549978407457;7.8888509166927\n" +
        "WX89;Rickenbach (SO);run-of-river;46.10965582955517;9.16751739699826\n" +
        "ZG82;Ziefen;pumped storage;46.82922158089059;8.137053797819341\n" +
        "SR61;Damphreux;pumped storage;47.40246753508731;8.800019752258596\n" +
        "DM81;Loveresse;substation;46.47663291032335;7.481481614932109\n" +
        "YB87;Adelboden;substation;46.517486546125866;9.29764424907715\n" +
        "FJ48;Jaberg;run-of-river;46.08247138592442;8.580210309177776\n" +
        "JA45;Lantsch/Lenz;substation;46.86176285912256;8.960336885992954\n" +
        "WD11;Les Planchettes;run-of-river;46.4620245986683;8.567040836923349\n" +
        "CD78;Trimmis;run-of-river;46.7959910853745;9.459910120652948\n" +
        "DE40;Messen;pumped storage;46.617690154098135;7.458802986695347\n" +
        "JZ12;Hasle bei Burgdorf;run-of-river;47.74712965731103;7.9905921875755235\n" +
        "LQ78;Balm bei Günsberg;pumped storage;46.47413244900582;7.853006977204736\n" +
        "DQ17;Untereggen;substation;46.20731390000319;8.883276333870901\n" +
        "CC67;Duillier;pumped storage;47.108747957055144;8.985146039745473\n" +
        "NG86;Mönchaltorf;pumped storage;47.144397688057815;7.957250642931001\n" +
        "SZ59;Buttwil;substation;47.08253715129371;8.426166009402998\n" +
        "QJ47;Gipf-Oberfrick;pumped storage;46.52185598122217;9.170476803495518\n" +
        "GD80;St. Margrethen;run-of-river;47.3183802199208;9.22683101132889\n" +
        "IJ59;Bleiken bei Oberdiessbach;substation;47.10599445555416;9.641504226361452\n" +
        "IW36;Cudrefin;run-of-river;47.4155592010764;9.235408153123629\n" +
        "GB47;Killwangen;run-of-river;47.55291406093892;9.219214363646362\n" +
        "LX98;La Praz;pumped storage;47.584481516998515;8.51287392509157\n" +
        "CL22;Sonvilier;pumped storage;47.39376067714857;8.326258401502521\n" +
        "VR77;Fey;pumped storage;47.465461187981646;7.968174759582799\n" +
        "DO85;Flaach;substation;46.40058249254929;8.69252407369892\n" +
        "KP82;Deitingen;pumped storage;46.456879035673474;8.497148338588907\n" +
        "UI84;Mex (VD);run-of-river;46.85745235615376;8.596948547310971\n" +
        "GY61;Ayent;pumped storage;46.49200205463909;7.934335314673209\n" +
        "AS87;Wattwil;substation;47.696678093813695;8.650522976185337\n" +
        "YN93;Nunningen;run-of-river;47.35515296295815;8.922589924724123\n" +
        "IO46;Turbenthal;substation;47.49174243738603;8.66098325180316\n" +
        "JQ70;Les Tavernes;pumped storage;47.67839499924758;8.578988256785117\n" +
        "QB61;Yvorne;run-of-river;46.445775126090126;7.734764957402754\n" +
        "XK81;Mauraz;run-of-river;46.50597651513767;9.355008131130063\n" +
        "WV92;St. Martin;pumped storage;46.885173307113504;8.19191267107671\n" +
        "GX54;Krauchthal;pumped storage;47.15800599920541;7.873836964988383\n" +
        "YD90;Attalens;run-of-river;46.09747095637118;8.774704902599588\n" +
        "XO36;Saubraz;pumped storage;46.51570133077172;9.481600863874043\n" +
        "BG98;Wolfisberg;pumped storage;47.02545993880308;7.48461410556862\n" +
        "ZT78;Wangenried;pumped storage;46.91299684457219;9.079835460285727\n" +
        "XA94;Krattigen;run-of-river;47.73561475295233;8.567241409154276\n" +
        "AA23;Törbel;run-of-river;47.17714016225795;8.41517144473266\n" +
        "VA47;Giebenach;pumped storage;46.228377964117705;8.323273821556375\n" +
        "LJ92;Lutry;pumped storage;46.35382892004887;8.361797749604143\n" +
        "OM62;Geroldswil;substation;46.73045120330443;9.412583412724768\n" +
        "WE98;Attiswil;pumped storage;47.11460680269621;8.733934157386056\n" +
        "YW67;Pomy;run-of-river;46.4496854091068;9.051784502775181\n" +
        "KK73;Peseux;pumped storage;46.169592797653124;9.151194520990837\n" +
        "HE90;Cureglia;pumped storage;46.26773097632778;7.644075790352325\n" +
        "WV22;Oberkulm;pumped storage;47.430335651822844;7.221521667634537\n" +
        "TZ76;St. Ursen;run-of-river;46.7308946404384;7.229083975193634\n" +
        "UR29;Villars-Tiercelin;substation;47.135209610445024;8.378642647906954\n" +
        "NT68;Laax;run-of-river;46.64541382623059;7.904750542353467\n" +
        "GU94;Waldstatt;run-of-river;47.126651419468665;7.775081002271727\n" +
        "BJ91;Prévonloup;pumped storage;47.75211295025138;8.71305865040058\n" +
        "RX85;Roggenburg;run-of-river;47.076959116630846;7.743669424919005\n" +
        "OI67;Monte Carasso;pumped storage;46.97757247785599;8.322794817185134\n" +
        "XR22;Wigoltingen;substation;46.547193233721124;7.477295236241365\n" +
        "OQ28;Saint-Saphorin-sur-Morges;run-of-river;46.937195208256966;8.020352373917333\n" +
        "NL82;Sottens;substation;46.852758667970704;9.46011194015991\n" +
        "OQ44;La Ferrière;substation;46.46212741079368;7.86716533709049\n" +
        "XM73;Schlossrued;run-of-river;47.65302049672532;7.731866119722879\n" +
        "XW79;Bioggio;run-of-river;46.960711489185414;9.136712635406807\n" +
        "WL62;Jenins;pumped storage;46.46570508163805;7.987573597157694\n" +
        "WP78;La Ferrière;substation;47.66157940540973;8.869693922150631\n" +
        "BU19;Maisprach;run-of-river;46.74014191433575;9.409720796672289\n" +
        "FI38;Kaiserstuhl;pumped storage;47.6782043008589;8.87374741373463\n" +
        "YM78;Holderbank (AG);run-of-river;47.67455216746206;8.318296687737549\n" +
        "AF60;Nuglar-St. Pantaleon;substation;47.74500638423548;7.640351790917761\n" +
        "ZS73;Wauwil;pumped storage;46.80027250149679;8.768670809707368\n" +
        "FE48;Sonvico;run-of-river;46.645472685504444;7.666115803949781\n" +
        "ZH69;Rossemaison;pumped storage;47.46625446594953;9.25557366339367\n" +
        "UR27;Mergoscia;pumped storage;46.77246717328407;8.046463602878033\n" +
        "IN73;Mühledorf (SO);substation;47.31760049919456;8.910065059610766\n" +
        "TX83;Oulens-sous-Échallens;substation;46.7165773591096;7.221587980848108\n" +
        "MD47;Tübach;run-of-river;47.18910598812157;8.578980821966168\n" +
        "ES53;Unterentfelden;pumped storage;46.28652951872673;9.652389470212789\n" +
        "WC88;Borex;substation;47.40580244556058;7.755321110880518\n" +
        "MW24;Cormoret;run-of-river;47.45103011710178;8.573863614858343\n" +
        "VE55;Engollon;substation;47.07907314451654;8.981499441162338\n" +
        "DH49;Reisiswil;substation;46.726421584853576;8.63029897723662\n" +
        "TP22;Grono;run-of-river;47.64209840102991;7.817106139043395\n" +
        "MC53;Schwendibach;run-of-river;46.12951683432768;7.343481489773026\n" +
        "JW44;Schönenwerd;substation;47.351374884025255;7.767235840231191\n" +
        "XI94;Hauterive (NE);run-of-river;47.25922836195382;8.885035871242287\n" +
        "IY49;Niederstocken;substation;47.50484685860044;8.29688249858063\n" +
        "RK62;Mülligen;run-of-river;47.342323137774954;8.656220169861205\n" +
        "KH18;Grächen;run-of-river;46.85519639133175;7.499105833953752\n" +
        "BV89;Surava;pumped storage;47.32981941622707;7.812595703940961\n" +
        "IN41;Wölflinswil;run-of-river;47.56208178576019;9.499758159970305\n" +
        "RP12;Bedano;substation;47.64652094261238;8.775033014928107\n" +
        "YY31;Coffrane;substation;47.27181896284704;8.24243439929548\n" +
        "YI72;Montherod;substation;47.14096643779828;7.79470858387859\n" +
        "CE80;Rossinière;pumped storage;46.15367578486511;9.15928847150319\n" +
        "EV19;San Vittore;substation;46.52916840075627;8.803507496091251\n" +
        "PF76;Chironico;run-of-river;47.34554496214497;9.464715235969688\n" +
        "QU58;Rochefort;run-of-river;47.6206252859017;7.4363641998569765\n" +
        "YV88;Almens;pumped storage;46.76615288769592;8.698966229553632\n" +
        "FX32;Burg im Leimental;run-of-river;47.59994440178932;9.57241112377646\n" +
        "FJ87; Switzerland;run-of-river;46.638403225013725;8.921861913834437\n" +
        "OI34;Bussy (FR);run-of-river;47.685559154684206;9.471182771223614\n" +
        "VL49;Nebikon;substation;46.82810062414417;9.410384657054905\n" +
        "ST86;Worb;substation;46.08706948955373;8.88964294366451\n" +
        "CB65;Worben;run-of-river;47.637173533366635;9.482796244874535\n" +
        "OL43;Hergiswil bei Willisau;run-of-river;47.25181881348082;8.684560891628328\n" +
        "JS31;Grandson;substation;46.6254142515783;7.775913892295025\n" +
        "TE40;Belmont-sur-Lausanne;pumped storage;47.290854752860135;7.834112960410238\n" +
        "VE73;Ftan;pumped storage;47.036007965347416;8.654156236041194\n" +
        "RS91;Trimbach;run-of-river;46.262891567652694;7.734995919051306\n" +
        "LX31;Niederrohrdorf;pumped storage;47.051230981566164;9.414297044671738\n" +
        "MD64;Walliswil bei Niederbipp;substation;46.52739884545326;7.659931021877676\n" +
        "PV55;Perly-Certoux;substation;46.10114688108634;9.064812767113304\n" +
        "AF59;Campello;run-of-river;46.95509170781259;7.483424341030568\n" +
        "ZU25;Malleray;run-of-river;47.038159179815565;9.105177139401695\n" +
        "OT45;Mumpf;substation;46.966028671866;9.333457985738308\n" +
        "VB37;Müntschemier;pumped storage;46.89004902240967;7.871540964152328\n" +
        "EH96;Möhlin;substation;46.790532188873605;7.603352692221729\n" +
        "JO43;Lüterswil-Gächliwil;substation;47.11910900660756;8.823741828000859\n" +
        "TU71;Vérossaz;pumped storage;46.185985458877184;9.57974854463198\n" +
        "BG93;Bäriswil;substation;46.934698461434095;8.17268490235187\n" +
        "SV88;Molondin;substation;46.410989644898294;8.62851798849563\n" +
        "ED24;Chesalles-sur-Oron;pumped storage;47.6522020884795;9.129593240004608\n" +
        "SQ24;Carouge (GE);substation;47.21754592737595;7.958609779339029\n" +
        "LZ95;Hasle (LU);substation;47.712813143863144;8.450127350443914\n" +
        "CZ59;Lully (FR);pumped storage;47.329850730995865;8.030846258220707\n" +
        "YK68;Lumino;substation;46.42565635297074;8.330633367174315\n" +
        "LZ37;Läufelfingen;run-of-river;46.64940906531342;9.24204415846257\n" +
        "EK33;Nenzlingen;run-of-river;47.35735603906572;8.280825597896039\n" +
        "QJ62;Emmetten;run-of-river;46.111734047897755;9.66653001285717\n" +
        "ZN43;Mollens (VS);run-of-river;46.28685036340765;8.836626489707175\n" +
        "QF34;Corcelles-près-Concise;substation;47.197748937389534;9.084389345053193\n" +
        "XL70;Gersau;substation;46.92161125012034;8.93615343596299\n" +
        "YX56;Uetendorf;substation;46.84282911468295;8.404687730407488\n" +
        "JX12;Lütschental;run-of-river;47.446971564205846;7.3160139438878975\n" +
        "GY55;Steckborn;run-of-river;46.2790545212249;7.424064896647138\n" +
        "UT90;Oulens-sous-Échallens;substation;46.73963410606846;8.438196243132914\n" +
        "BX41;Noville;pumped storage;46.34140043190165;9.399721942461682\n" +
        "TW86;Känerkinden;pumped storage;47.32973726705484;7.837863980571112\n" +
        "UF91;Walenstadt;run-of-river;46.74898901520406;7.36694416837722\n" +
        "TP46;Galmiz;pumped storage;46.621631667571016;7.641079407182244\n" +
        "AP95;Sierre;substation;46.940018041796236;7.302519024630222\n" +
        "MA21;Meyrin;substation;47.04304027034217;8.448223858955284\n" +
        "CU47;Bretzwil;pumped storage;47.67185910121719;9.468923920047716\n" +
        "MX93;Nuvilly;run-of-river;46.34076535633185;9.273163562987808\n" +
        "PM23;Schmiedrued;substation;47.31629355221895;9.532841794020104\n" +
        "RK60;Wohlen (AG);substation;46.19371702101226;8.658712914022473\n" +
        "QB32;Benken (ZH);pumped storage;46.44328563951325;8.905318253974336\n" +
        "VV82;Schattenhalb;run-of-river;47.353246664368655;8.672879253572814\n" +
        "NQ74;Gaiserwald;run-of-river;47.57832560254366;8.978543185924295\n" +
        "RV83;Ernen;substation;46.36245584553662;9.658893739926313\n" +
        "BM62;Rances;run-of-river;46.795673892114;7.3827421984443635\n" +
        "LK86;Wettswil am Albis;pumped storage;47.66418129749709;7.701320545340563\n" +
        "XJ96;Roggwil (TG);run-of-river;46.42907131299195;7.23083888517542\n" +
        "HF50;Wauwil;substation;46.93053071566793;8.77420657313287\n" +
        "FX81;Bretigny-sur-Morrens;run-of-river;46.53992672381745;7.7253988172441845\n" +
        "XH36;Obersteckholz;substation;46.158892653310836;9.53423026319088\n" +
        "KM75;Altbüron;pumped storage;46.21647663715552;7.830128580078382\n" +
        "UD13;Blatten;run-of-river;47.70837510395948;9.067550320809126\n" +
        "PP73;Blumenstein;pumped storage;46.529471768876604;8.710112412342855\n" +
        "OF30;Les Genevez (JU);substation;47.049480693445524;9.13214757036594\n" +
        "JR40;Hindelbank;run-of-river;46.35460813577879;8.21499460038959\n" +
        "XU98;Salgesch;pumped storage;47.2195642708355;8.37798579585547\n" +
        "DI91;Oppens;run-of-river;47.560915797727056;7.606102234353929\n" +
        "ZL37;Vuisternens-en-Ogoz;run-of-river;46.763842162918905;8.55839372997624\n" +
        "VG31;Camorino;run-of-river;47.205345282698325;9.091999919515683\n" +
        "OT49;Mühleberg;substation;46.7713138816117;7.783047551288613\n" +
        "BR27;Zihlschlacht-Sitterdorf;pumped storage;47.04761999906457;8.225194667522082\n" +
        "NL83;Widnau;pumped storage;47.06069980904322;7.98265789515188\n" +
        "NI86;Galmiz;substation;46.71708651258061;7.3046356219775355\n" +
        "UO63;Haldenstein;run-of-river;46.28969497155783;8.873400369022232\n" +
        "UG72;Clarmont;run-of-river;46.255744307165465;8.325344609586056\n" +
        "AW36;Ruswil;pumped storage;46.84682958518674;8.610116730481248\n" +
        "DE81;Zollikofen;substation;47.18338856375399;9.608485626266102\n" +
        "GT80;Valcolla;substation;47.275200405261174;8.233922134905953\n" +
        "YO94;Seedorf (UR);substation;47.027772538230685;7.476597946867255\n" +
        "CX84;Braunau;run-of-river;47.5601070887618;9.315192450093946\n" +
        "WD22;Münchenstein;run-of-river;47.022899557806724;9.60837874420815\n" +
        "EW83;Langendorf;pumped storage;47.605135741103325;8.220418985751483\n" +
        "FY48;Buseno;run-of-river;46.21228701648684;8.581027297507354\n" +
        "WU35;Vandoeuvres;run-of-river;47.54066429788415;8.7349336645875\n" +
        "BJ52;Göschenen;substation;46.8809524223508;8.770503936762916\n" +
        "BN77;Dardagny;substation;46.81814612807993;8.350121612127385\n" +
        "LK24;Oberlunkhofen;pumped storage;46.66975166299598;7.651135031154271\n" +
        "HC92;Marly;pumped storage;46.448069054853974;7.219160416736883\n" +
        "SL74;Sempach;run-of-river;47.71298958563556;8.326061104458955\n" +
        "MO25;Etoy;substation;46.19530390221171;9.310601297371036\n" +
        "BX39;Diemerswil;substation;47.092158766214055;9.517579503336197\n" +
        "OT73;Presinge;run-of-river;47.602544689049054;8.132043157640293\n" +
        "XQ84;Guarda;run-of-river;47.14602868516333;8.288407918902056\n" +
        "GL17;Carouge (GE);pumped storage;46.338864709740676;9.209112059042095\n" +
        "XZ36;Dielsdorf;run-of-river;46.44227725840775;8.044338816557866\n" +
        "OH96;Glattfelden;substation;46.620847110155374;9.189186561684789\n" +
        "BH41;Truttikon;substation;46.43435082355391;7.637092024970181\n" +
        "JK28;Ponte Tresa;pumped storage;47.63497900072913;9.223022908994645\n" +
        "XI72;Jongny;pumped storage;47.02829929390749;8.6255214024623\n" +
        "GJ49;Longirod;run-of-river;46.18418977609593;8.151269888505288\n" +
        "HN92;Bronschhofen;substation;46.80031557970154;9.609896418011289\n" +
        "RG12;Wachseldorn;run-of-river;46.52504963755518;8.442501134993472\n" +
        "HP47;Fribourg;run-of-river;46.47426001188282;8.825263182753462\n" +
        "NB98;Rovray;pumped storage;46.168587080951674;8.283535285874011\n" +
        "JR48;Siselen;pumped storage;46.7696757492037;8.91748924109517\n" +
        "CE86;Müntschemier;pumped storage;46.14981012243059;9.485357661456895\n" +
        "VG15;Broc;run-of-river;47.604167858056364;7.558077862747338\n" +
        "TM11;Cheyres;pumped storage;46.17290926967333;7.630930288195545\n" +
        "SS47;Vulliens;pumped storage;47.312655918091494;9.610076189150524\n" +
        "EQ37;Signau;run-of-river;46.45297039618208;9.618307320202799\n" +
        "BD60;Glattfelden;pumped storage;46.93980082394266;7.480152312565514\n" +
        "PE75;Russikon;pumped storage;47.56702971028876;8.8070174420614\n" +
        "IG89;Baltschieder;substation;47.02662123839347;7.555150629139737\n" +
        "GS76;Belp;substation;47.475528617553174;8.271367182557626\n" +
        "RY23;Tegna;substation;47.091259175273336;9.334753890004547\n" +
        "YD38;Inden;pumped storage;47.732581866007045;9.441892631233491\n" +
        "ED92;Rueyres;substation;47.15219664960414;8.014165116976143\n" +
        "WT86;Altikon;pumped storage;47.549603609918584;7.258300578851918\n" +
        "JO43;Zauggenried;pumped storage;46.2879723179127;8.204268199950999\n" +
        "BD63;Fontenais;run-of-river;47.56232487164509;7.577979788580738\n" +
        "KW28;Coffrane;run-of-river;47.22880825144856;8.759482029755093\n" +
        "QY19;Oberstocken;pumped storage;47.69706112074656;8.848970875993844\n" +
        "TI65;Boulens;pumped storage;46.184507220270454;9.252384639948927\n" +
        "ID15;Schleitheim;substation;46.10268777020559;9.660463038781053\n" +
        "HT43;Wenslingen;run-of-river;47.31468672830902;7.333021270291468\n" +
        "UV55;Uznach;run-of-river;46.27067468949465;7.824365668428745\n" +
        "GG78;Reichenbach im Kandertal;substation;47.713497523578035;8.739481274683698\n" +
        "YD44;Rapperswil (BE);substation;47.438270971187514;7.677255934079896\n" +
        "VU81;Grolley;run-of-river;46.084279428082006;8.157611330700492\n" +
        "GU50;Riom-Parsonz;substation;47.24187460471158;7.927775127676716\n" +
        "AB11;Rossenges;substation;46.9582773958134;9.23158159211361\n" +
        "VM22;Vuisternens-devant-Romont;substation;46.23776652514357;9.325271306201742\n" +
        "JB73;Lüscherz;substation;46.08663752726086;7.212540858382199\n" +
        "AS48;Wildhaus-Alt St. Johann;run-of-river;46.982464402612685;7.247825863756822\n" +
        "NE58;Corserey;run-of-river;46.890876656031566;9.115568382057521\n" +
        "UK15;Monteceneri;substation;46.65426972352119;7.3718556347834\n" +
        "VL21;Collonge-Bellerive;run-of-river;47.245268800677145;7.347990226544586\n" +
        "ZM39;Laax;pumped storage;46.112006501891074;8.498955086419528\n" +
        "JF96;Romont (FR);pumped storage;46.901510569364966;7.457108374786333\n" +
        "HI32;Arnex-sur-Orbe;substation;47.15490749797022;9.105780667463769\n" +
        "FQ13;Melchnau;run-of-river;46.20986073989962;9.53564522776702\n" +
        "OJ62;Lommis;run-of-river;47.38118001206775;9.627782780120526\n" +
        "ME62;Obersaxen;substation;46.59463114407147;9.14446084370914\n" +
        "NR76;Céligny;run-of-river;46.433367655214234;9.055666725317742\n" +
        "IG77;Berolle;pumped storage;47.65796582616412;9.468335258588754\n" +
        "CU37;Agarn;substation;46.21372370488029;8.363539563029851\n" +
        "BO81;Le Cerneux-Péquignot;run-of-river;47.470117416541015;7.653385162631026\n" +
        "KR40;Boniswil;pumped storage;47.493116736420326;8.031973644146811\n" +
        "VE21;Ruswil;run-of-river;47.28916991397602;8.378049700437703\n" +
        "FD46;Saignelégier;pumped storage;46.26910104949445;9.150461841787036\n" +
        "LZ18;Remigen;run-of-river;46.33882249823333;8.224237008773565\n" +
        "JY87;Seftigen;substation;46.735651559564644;9.322370077961473\n" +
        "CT62;Bioley-Magnoux;run-of-river;46.700420366060406;7.43123098022812\n" +
        "QX91;Vich;pumped storage;47.6255232862136;9.395204539035685\n" +
        "TL92;Vuadens;substation;47.473884009638034;7.95238916784353\n" +
        "IS15;Oetwil am See;run-of-river;46.402961298989005;8.170926250621664\n" +
        "BB72;Schönholzerswilen;pumped storage;46.39747646201542;8.262877599503682\n" +
        "YU70;Jegenstorf;pumped storage;46.86838503218307;8.977025383568671\n" +
        "VF82;Tenna;substation;47.06611560798299;8.799333549402855\n" +
        "JZ83;Egolzwil;substation;47.15627677509978;8.939249008973016\n" +
        "AV23;Campo (Vallemaggia);pumped storage;46.70956972207842;8.344265454637297\n" +
        "QG72;Vauffelin;substation;46.82848800780975;7.997006836018708\n" +
        "GG75;St. Martin;substation;47.112873143818945;9.305253048784001\n" +
        "GP35;Fällanden;run-of-river;46.4865353982884;7.457230560487914\n" +
        "LE62;Niederwil (AG);pumped storage;47.15682299436117;8.759135587347313\n" +
        "JS97;Altishofen;substation;47.02656413526396;8.791961406089323\n" +
        "WC72;Ormalingen;run-of-river;47.08686594966795;7.870950401631008\n" +
        "IQ70;Waltenschwil;pumped storage;47.014847653680164;7.754823703378266\n" +
        "JY24;Maroggia;substation;47.39551466638264;8.960921289951811\n" +
        "SP62;Worb;substation;47.35450239554639;7.302130067736829\n" +
        "EX48;Ernen;run-of-river;46.52995963400341;7.25909351071355\n" +
        "GP97;Saas-Grund;pumped storage;46.68140591386777;9.660410739832187\n" +
        "IP69;Saillon;substation;46.163517082557945;9.184235756626611\n" +
        "IM26;Oberrüti;substation;47.29508580255324;7.865696748096977\n" +
        "JA46;Boécourt;run-of-river;47.651375640732;8.286598381034295\n" +
        "OZ15;Marsens;pumped storage;47.71404942344722;8.193708978474415\n" +
        "DA97;Turbenthal;pumped storage;47.36308475555944;9.620654462577603\n" +
        "WD93;Sainte-Croix;run-of-river;46.97078424781191;8.133144977645236\n" +
        "OP58;Sulgen;substation;46.85708623717511;9.509615790134374\n" +
        "UD77;Gurtnellen;run-of-river;46.944610349008165;7.479937610888353\n" +
        "NR56;Coinsins;substation;47.616549135726345;9.613819083205986\n" +
        "LM77;Baltschieder;substation;46.77747682895336;7.941915107409758\n" +
        "WO68;Münchenwiler;run-of-river;46.968164885904486;8.870753125911301\n" +
        "JI19;Riaz;substation;46.24663191672224;7.505007009416667\n" +
        "WI88;Steffisburg;pumped storage;46.314418377101084;8.836595508856721\n" +
        "OM25;Corbeyrier;substation;46.43609043211605;8.486716474871526\n" +
        "DX53;Gryon;run-of-river;47.61902117003095;9.25529834595458\n" +
        "UG70;Schlans;substation;46.129197082431325;7.238094847988933\n" +
        "EY24;Muri (AG);run-of-river;46.699258115753885;8.490736736145278\n" +
        "XQ78;Mettmenstetten;pumped storage;47.32112336406698;7.447625644964413\n" +
        "QC11;Küttigen;pumped storage;46.10553773348098;8.102291873301402\n" +
        "IA49;Hochwald;run-of-river;46.509518867479024;7.833421775203272\n" +
        "DO94;Göschenen;run-of-river;47.42307730920618;9.63705213769422\n" +
        "FY27;Corcelles-près-Payerne;substation;46.1352602697836;7.2144904465188056\n" +
        "HG56;Rossens (FR);run-of-river;46.66156759933068;9.157507083857451\n" +
        "HB14;Bäriswil;pumped storage;47.27578187362601;8.210699920379447\n" +
        "TH24;Starrkirch-Wil;substation;47.305251751993644;8.171327363402531\n" +
        "NE11;Henniez;run-of-river;46.592095970785124;8.191892617548254\n" +
        "UV73;Syens;substation;47.05242652996546;7.4658649325172615\n" +
        "MG23;Steffisburg;substation;47.083909839939615;8.760800658707963\n" +
        "PE45;Erlenbach (ZH);pumped storage;47.02714674188256;8.160351376098877\n" +
        "MO26;Erlach;run-of-river;46.172538491908995;8.880754116267163\n" +
        "NI46;Laax;substation;46.508767502443376;8.909656005949037\n" +
        "NL35;Bellerive (VD);pumped storage;46.75649650220039;8.914905953251466\n" +
        "BM59;Oberbipp;run-of-river;47.3353842516063;7.4864508570765125\n" +
        "AB37;Mur (VD);substation;47.09521655866447;7.431337910450844\n" +
        "XR45;Giubiasco;run-of-river;47.62542067007307;8.334749798660843\n" +
        "HM40;Saint-Gingolph;substation;46.33353674413882;9.33402649572032\n" +
        "KD18;Buchholterberg;run-of-river;47.17866153410456;7.897669404586648\n" +
        "MA25;Samedan;run-of-river;47.225148312079824;7.805306093930227\n" +
        "AM69;Fahy;run-of-river;46.60118012024919;8.712194756006792\n" +
        "VO10;Hergiswil bei Willisau;run-of-river;46.385591064160174;8.016848310517108\n" +
        "FI21;Mont-sur-Rolle;pumped storage;46.93657452609144;9.205510235494344\n" +
        "IE27;Hinwil;pumped storage;47.346726604612506;8.005853152856126\n" +
        "RJ15;Éclagnens;run-of-river;47.604899119559825;7.964728878863512\n" +
        "TH15;Unterendingen;substation;46.566205258839524;9.287064080556398\n" +
        "AU51;Blumenstein;run-of-river;46.41922501252853;8.384404577659073\n" +
        "EJ32;Fislisbach;substation;46.588463184777545;7.5194987682901875\n" +
        "KH31;Unterendingen;run-of-river;46.12973201438997;8.687800859684563\n" +
        "XC77;Le Cerneux-Péquignot;pumped storage;46.40436119443125;9.620879628978368\n" +
        "WM57;Raron;substation;46.282700784914816;8.702280607319336\n" +
        "RH53;Saas im Prättigau;pumped storage;46.380588749133985;7.605139110683983\n" +
        "NJ66;Staffelbach;substation;46.253350404570455;9.61709874615422\n" +
        "TM31;Risch;run-of-river;46.193967958112815;9.005949422457373\n" +
        "SW51;Le Lieu;substation;47.42129307649034;8.557074795428818\n" +
        "NF95;Chavannes-près-Renens;substation;46.091659614582454;8.417360467586697\n" +
        "ZQ22;Rickenbach (SO);pumped storage;46.945815766341866;7.945016918969081\n" +
        "SP27;Cureglia;run-of-river;46.27971211041263;9.410371967609548\n" +
        "YK53;Le Chenit;pumped storage;47.070623278831704;7.305945949452331\n" +
        "OO69;Belprahon;substation;46.28425870450102;8.433345483426256\n" +
        "BX58;Mollens (VS);pumped storage;46.60406470580503;8.923931711047405\n" +
        "AY58;Poschiavo;pumped storage;47.30380983819023;9.318099849360516\n" +
        "FU85;Gunzgen;pumped storage;46.58846264184208;7.338021002121068\n" +
        "YU35;Villars-Bramard;run-of-river;46.15811349897358;7.986183163018421\n" +
        "IK30;Plagne;pumped storage;46.82804641318365;8.055280766826117\n" +
        "AL59;Bergdietikon;substation;46.857996714296995;8.791206287118229\n" +
        "LR74;Chanéaz;substation;47.11567018923777;7.844027580797412\n" +
        "FG85;Boussens;pumped storage;47.03354050073305;8.321533601105674\n" +
        "OP48;Peist;run-of-river;46.9220812878172;9.65555754144314\n" +
        "ML71;Samnaun;substation;46.14855675441637;7.3183964677177915\n" +
        "PT24;Baldingen;run-of-river;46.849940358621794;7.958009177237268\n" +
        "IL35;Boudry;substation;46.83222424670101;8.702288675305459\n" +
        "TA43;Puidoux;pumped storage;47.17978779615568;8.746121622020981\n" +
        "NT98;Ludiano;pumped storage;46.69097571623032;7.363840862580518\n" +
        "SA79;Ballaigues;pumped storage;47.31358211981826;9.431398721431096\n" +
        "PJ18;Rossinière;run-of-river;46.51982059631101;8.289968536526894\n" +
        "AM13;Kloten;pumped storage;47.52894125197273;8.152089133950268\n" +
        "UH24;Vuiteboeuf;run-of-river;46.99640293575679;7.82753009985449\n" +
        "AB67;Berikon;pumped storage;47.64274581360273;7.486691476886782\n" +
        "SF21;Elfingen;substation;46.986624128979976;8.671256281460572\n" +
        "VZ52;Hermance;substation;47.11622037772857;8.432967977669104\n" +
        "ZK73;Dinhard;substation;47.253548997187615;7.350646078010752\n" +
        "BQ89;Bünzen;pumped storage;47.302792030603236;9.266794970293738\n" +
        "KQ25;Tschugg;pumped storage;47.047430206598335;7.7051284457632665\n" +
        "VW50;Champéry;pumped storage;46.730575849143406;9.66206676649653\n" +
        "UE70;Signau;substation;46.32293021120352;8.389653515907746\n" +
        "EO15;Rumendingen;pumped storage;46.55513722500746;7.217064376543628\n" +
        "SL71;Weinfelden;run-of-river;46.16675352411392;7.389511927759278\n" +
        "UR15;Sessa;run-of-river;46.50545400359427;9.556537825971144\n" +
        "RN40;Villiers;pumped storage;47.696710204536636;7.21251369492602\n" +
        "BC64;Dottikon;run-of-river;47.091740219488386;7.233905026860279\n" +
        "BG25;Egg;pumped storage;46.729809423731936;9.383199630409342\n" +
        "PZ13;Altishofen;substation;46.77779010941513;9.248833366123216\n" +
        "UD80;Cuarnens;substation;47.674057852395144;7.358913232715684\n" +
        "BH40;Massongex;run-of-river;46.78392429043537;7.311957368712028\n" +
        "ZY35;Saules (BE);pumped storage;47.1424417848621;7.8969131395635115\n" +
        "JR96;Doppleschwand;pumped storage;46.65519472940602;9.35562196284452\n" +
        "AA14;Lommis;run-of-river;46.173028463295324;7.609640407617013\n" +
        "VM31;Jenins;substation;47.36395290541807;7.756317900899632\n" +
        "GL70;Cortébert;substation;46.33906895241704;9.057828358538849\n" +
        "RU39;Geuensee;pumped storage;47.11840812977297;7.848562454760666\n" +
        "DR76;Bussnang;substation;46.40577692366784;7.961201157032354\n" +
        "NW75;Chevroux;substation;46.411942149612145;9.024776078781155\n" +
        "WM25;Wyssachen;substation;47.05388653544327;7.397230033920391\n" +
        "ST37;Herbetswil;run-of-river;46.65499541623826;7.400632063406238\n" +
        "WV81;Dozwil;pumped storage;47.35555800865854;8.69254919216707\n" +
        "QO27;Andermatt;run-of-river;47.697687212765665;8.893452950839151\n" +
        "OH84;Kandergrund;run-of-river;47.62410740086222;8.654480378974316\n" +
        "CF28;Weggis;run-of-river;47.424986976060424;7.379774757563824\n" +
        "RA14;Salvenach;pumped storage;46.458710752297186;8.417517589002625\n" +
        "QH96;Osogna;run-of-river;47.23625508299003;9.15279235887811\n" +
        "KX87;Sevgein;run-of-river;47.70721457058954;9.307059359867289\n" +
        "RC22;Birrwil;pumped storage;47.23743808558416;8.962690842972833\n" +
        "RU60;St. Ursen;run-of-river;46.50003361950092;7.511294320757896\n" +
        "FG93;Gündlischwand;substation;47.42360868568154;8.98488497074604\n" +
        "VT22;Mont-la-Ville;run-of-river;46.34196225460975;9.521524721751376\n" +
        "YM60;Ormont-Dessus;substation;46.384869344066296;9.518296210655652\n" +
        "MU17;Bettlach;substation;47.40875916859652;9.420739945829583\n" +
        "HJ75;Sarmenstorf;substation;46.40473780912169;9.637845684413534\n" +
        "HH79;Grandval;run-of-river;46.62543077699148;8.319152835552241\n" +
        "ZV17;Chénens;pumped storage;46.58071553404314;9.068525926588972\n" +
        "PR98;Mollens (VS);pumped storage;47.13534823222203;8.664186514063765\n" +
        "QA91; Switzerland;run-of-river;47.710134878062746;7.581946603217552\n" +
        "BY42;Oberhünigen;run-of-river;46.58104748615549;8.494555283894487\n" +
        "VM94;Miège;run-of-river;46.73696375454922;8.573149222889354\n" +
        "EJ60;Fahrwangen;pumped storage;46.14114147720576;8.402322036990173\n" +
        "CN18;Islisberg;pumped storage;46.997115322469945;8.425241952806637\n" +
        "UD32;Münsingen;substation;47.75165699108675;7.612211409357738\n" +
        "PF27;Bellevue;substation;47.16221212011174;9.655461933082695\n" +
        "YX39;Gingins;run-of-river;46.776049070346055;8.259172406070016\n" +
        "OV51;Daillens;pumped storage;47.11702642750384;8.404740346821894\n" +
        "TT18;Birgisch;substation;46.651601367855065;7.72761902709264\n" +
        "TF89;Koppigen;substation;46.18295168662605;7.98336948340034\n" +
        "WQ69;Trub;pumped storage;46.48769224689275;8.593186415033422\n" +
        "GA89;La Baroche;pumped storage;47.500280799151305;8.24058468239006\n" +
        "HU27;Quarten;run-of-river;47.700927266714416;7.709780018820366\n" +
        "TY94;Uetendorf;pumped storage;47.282901669613814;9.401776187764654\n" +
        "VR71;Gansingen;run-of-river;46.58417439137617;7.340193604981587\n" +
        "KS95;Presinge;run-of-river;47.23157835314816;7.997032507333459\n" +
        "CJ96;Biel/Bienne;pumped storage;46.86800373641405;8.456701850771013\n" +
        "XQ68;La Roche;substation;46.45344052328447;8.272385301930811\n" +
        "VD75;Froideville;run-of-river;46.24904847367511;8.2761553362428\n" +
        "XW85;Dörflingen;run-of-river;47.15609916939116;9.171599709563608\n" +
        "FY80;Bannwil;run-of-river;47.379777001036885;7.614330929095192\n" +
        "QO31;Molondin;substation;47.23035436271304;8.809722328626744\n" +
        "DF59;Altbüron;substation;47.53352172052163;7.76972583684465\n" +
        "ML59;La Baroche;substation;47.38053022726911;8.653674530612179\n" +
        "XM19;Bister;substation;46.18968761284673;7.9609301405341935\n" +
        "GX80;Kriegstetten;substation;47.648789638995666;9.115401572549468\n" +
        "AA25;Aesch (ZH);substation;46.67940050724752;8.169744094520471\n" +
        "TW65;Sutz-Lattrigen;substation;46.4674124401243;8.251990335406479\n" +
        "MM46;Grangettes;pumped storage;46.26730770399201;8.705613832946185\n" +
        "BI21;Villars-le-Grand;substation;46.62747046434656;8.085913936624983\n" +
        "KW21;Widnau;substation;47.250903075203446;8.076334153640728\n" +
        "LZ23;Les Genevez (JU);substation;46.81210736421722;8.132950061798969\n" +
        "DL52;Gais;pumped storage;46.78442648439534;8.068317340776195\n" +
        "ZK57;Saas-Fee;substation;46.11516517276831;9.421108083334373\n" +
        "MK89;Lengnau (BE);pumped storage;47.43337939752717;8.08113350564087\n" +
        "OR78;Suhr;run-of-river;46.884452069980796;8.020515638544891\n" +
        "TD93;Carona;run-of-river;47.48017414338622;9.508628529318544\n" +
        "RA65;Ennetmoos;pumped storage;46.235945781746835;7.215847703214101\n" +
        "EC97;Senarclens;run-of-river;46.61427176999845;8.401298993944746\n" +
        "PG70;Montalchez;run-of-river;47.463190933329045;7.964993479559245\n" +
        "JG74;Combremont-le-Grand;substation;46.23896657051221;7.550534663058379\n" +
        "UP90;Duggingen;pumped storage;47.737487767735466;8.690595622997469\n" +
        "SE40;Schmitten (GR);substation;46.661449842514386;7.5340589427307725\n" +
        "EG89;Cerentino;pumped storage;47.40622711938175;8.89856874821551\n" +
        "MU17;Penthalaz;substation;47.60507141620746;8.407713958746344\n" +
        "PE94;Wolfisberg;run-of-river;47.10788800673196;8.26273984631355\n" +
        "GY12;Medel (Lucmagn);run-of-river;46.48775969174452;8.058356108271632\n" +
        "FN47;Frenkendorf;substation;46.40831554304198;7.9761583172927555\n" +
        "VU70;Essert-Pittet;substation;47.672845918087965;7.562154270700219\n" +
        "JT91;Beznau 2;nuclear;47.5516369238;8.2281975123232\n" +
        "AP68;Le Vaud;substation;46.77117462586779;9.011402410493544\n" +
        "UO92;Le Grand-Saconnex;run-of-river;47.2860825498692;9.369337365897444\n" +
        "OB90;Schmiedrued;pumped storage;47.42521332081626;9.109168476658542\n" +
        "DI68;Niederbipp;run-of-river;46.87996362893102;7.384709566135243\n" +
        "YJ90;Miège;pumped storage;47.41261185995712;7.904622891018261\n" +
        "PM71;Gipf-Oberfrick;pumped storage;46.87827480565689;8.818133675268095\n" +
        "SA29;Wigoltingen;pumped storage;46.520484274254336;7.879447048557049\n" +
        "ZY42;Bözen;substation;46.39742167378441;7.2644027924708325\n" +
        "TP12;Uznach;pumped storage;47.30580390482174;8.601045280473084\n" +
        "QZ65;Montreux;substation;47.36525259745464;8.79407795718146\n" +
        "LE71;Trogen;run-of-river;47.390735725892796;7.354494800417987\n" +
        "WO46;Châtel-sur-Montsalvens;substation;47.677950846898625;8.081457256753268\n" +
        "QS12;Ruswil;substation;47.450960068135586;8.74365247352316\n" +
        "FI40;Rougemont;pumped storage;46.5141240054916;7.852213332783009\n" +
        "AQ90;Zürich;substation;46.914683610568396;7.951688546819852\n" +
        "ZK54;Tinizong-Rona;run-of-river;46.23897693560467;8.367781294967495\n" +
        "HL81;Rohr (SO);run-of-river;46.26426728036433;8.683208418332194\n" +
        "MX85;Borex;substation;46.55568507392023;8.161121128740916\n" +
        "FK14;Langnau im Emmental;pumped storage;46.42601557943459;9.584148024012359\n" +
        "DD17;Leytron;substation;46.91762265855055;7.718610275894956\n" +
        "UV32;Romanel-sur-Morges;run-of-river;46.86097707357493;8.02014051378833\n" +
        "NH86;Corcelles-sur-Chavornay;substation;46.867263033253636;9.463680373360727\n" +
        "NF16;Sulgen;substation;47.37641755335969;9.666404234959623\n" +
        "YS25;Birr;run-of-river;46.93297605610591;7.547214614023024\n" +
        "MS57;Liestal;run-of-river;46.696424378200014;8.494439390375547\n" +
        "VG38;Chavannes-le-Chêne;run-of-river;47.43131679892855;8.435139823533596\n" +
        "FF42;Neckertal;run-of-river;46.08258362528003;9.066815236017375\n" +
        "RH78;Mauborget;substation;46.447082308952105;8.977075514103655\n" +
        "TP44;Herisau;pumped storage;46.53654375598978;7.907620534053301\n" +
        "HK46;Eschenz;run-of-river;47.43951154474554;8.129927080799678\n" +
        "FK91;Leuzigen;run-of-river;46.40566351871247;7.546527829724507\n" +
        "KP53;Schangnau;pumped storage;46.40001142517475;7.687117365777919\n" +
        "OY72;Courlevon;substation;47.140578649805676;8.42502186641789\n" +
        "PO73;Molondin;pumped storage;46.748094766408485;7.439884692496748\n" +
        "XM41;Wünnewil-Flamatt;pumped storage;46.99773836262595;9.135382150397373\n" +
        "BP48;Dietwil;pumped storage;47.36222230758109;7.832316949847396\n" +
        "SD65;Safnern;pumped storage;46.805462683419506;9.537756724542625\n" +
        "AQ75;Vevey;run-of-river;46.99267490735086;9.168625199379726\n" +
        "JW66;Schwerzenbach;run-of-river;46.644339780939724;8.635017897400402\n" +
        "SH14;Glovelier;run-of-river;47.22509189658779;8.145537373274482\n" +
        "FB78;Blitzingen;substation;46.81805673137952;9.223339303011873\n" +
        "MO88;Unterbäch;run-of-river;46.70002157846821;8.773218904380034\n" +
        "JQ64;Reinach (BL);pumped storage;47.37634689263617;9.257296557462741\n" +
        "NG71;Chavannes-des-Bois;substation;46.20378875076641;8.697510513872823\n" +
        "GX14;Chavannes-le-Veyron;run-of-river;46.465854830220444;8.90436594452995\n" +
        "YN16;Savigny;substation;46.68478527653696;8.833453796651026\n" +
        "LN25;Beurnevésin;run-of-river;46.99627604005229;9.0028844572855\n" +
        "VS73;Arogno;substation;46.659507888929355;9.192355679069038\n" +
        "TD85;Novaggio;substation;46.18324590607269;9.584228720971899\n" +
        "JM66;Reverolle;pumped storage;47.332709843488075;9.435832923401097\n" +
        "CP28;Wädenswil;pumped storage;46.29879735964229;8.52178912567756\n" +
        "AB96;Wengi;substation;47.40136305752671;8.998244248947033\n" +
        "DF49;Aubonne;substation;46.39901672024828;9.220290082028818\n" +
        "XM89;Berlingen;pumped storage;46.19394457583731;7.6434945218453985\n" +
        "IW36;Altendorf;run-of-river;47.23803717720436;7.803593984475738\n" +
        "AD90;Mettembert;substation;46.634643801495656;8.909230408211865\n" +
        "MV86;Zuzgen;substation;46.67100752138871;7.750613848995414\n" +
        "JO60;Monteggio;run-of-river;47.556776480177476;7.484905475576062\n" +
        "KF15;Saxon;pumped storage;46.35093385601007;7.411688771307407\n" +
        "UC68;Sobrio;substation;47.280273424638644;7.86588951627416\n" +
        "ZB81;Anzonico;pumped storage;46.1330422224357;9.21915240416915\n" +
        "VN56;Beznau 1;nuclear;47.552354563;8.228373483435\n" +
        "HZ12;Zeneggen;run-of-river;47.29876617730022;7.88729889212296\n" +
        "WN82;Vufflens-la-Ville;substation;46.86245156190445;9.057464969785858\n" +
        "ZQ97;Eiken;substation;47.40669002467177;7.870870076621872\n" +
        "MJ47;Gisikon;run-of-river;47.49704602290415;7.547438063623644\n" +
        "JF10;Rüderswil;run-of-river;47.08491933009574;7.6434502341678545\n" +
        "XJ49;Müllheim;pumped storage;46.93117205777454;7.251731750319537\n" +
        "FC47;Givrins;run-of-river;46.918633293141376;8.579129452152772\n" +
        "MV73;Schnaus;pumped storage;47.16202095481934;9.45393194059345\n" +
        "FI31;Henggart;substation;46.74151080858112;7.389059902913845\n" +
        "ZI51;Ziefen;pumped storage;46.43257267124855;9.044760020095696\n" +
        "PN20;Billens-Hennens;pumped storage;46.57790631748285;9.007285393423183\n" +
        "UG37;Rumisberg;pumped storage;46.296552714539644;8.708104223156852\n" +
        "WM48;Regensberg;substation;47.06835957583996;9.382088220030242\n" +
        "UU55;Mönthal;pumped storage;47.11704812247498;8.102483485180242\n" +
        "EZ14;Sins;pumped storage;46.5082496235344;9.46468940304032\n" +
        "ZB89;Kaltbrunn;run-of-river;46.82929909511323;9.452819432602627\n" +
        "KI12;Kaiserstuhl;pumped storage;46.249668237605896;9.02752041674105\n" +
        "OE24;Hildisrieden;pumped storage;47.55533442096563;9.60359935323565\n" +
        "YB27;Wikon;run-of-river;46.73195987022627;9.425639860321985\n" +
        "DR27;Bettenhausen;run-of-river;46.20646213726732;8.342362435360702\n" +
        "IQ51;Mettmenstetten;substation;47.72931571690636;9.082967452248102\n" +
        "UL54;Locarno;run-of-river;46.8863956391595;7.9195946502333125\n" +
        "TB82;Givisiez;pumped storage;47.01334358631499;9.604961247791813\n" +
        "BI67;Andwil (SG);substation;47.50062002974955;7.6466906120474\n" +
        "VZ55;Bodio;pumped storage;46.43459354915101;8.381644635293917\n" +
        "YN28;Buchs (AG);substation;46.87448115680253;8.992178650549327\n" +
        "TC61;Langenthal;run-of-river;46.728512551995536;7.615855473414425\n" +
        "IU74;Linescio;run-of-river;46.132578485100204;8.396680193244949\n" +
        "PC40;Misery-Courtion;run-of-river;46.12249178526121;8.618743877480208\n" +
        "SA17;Oeschgen;substation;46.51276830797549;7.565710573082723\n" +
        "PR60;Seedorf (BE);run-of-river;47.58068640483106;7.3205404462153645\n" +
        "NH89;Oberiberg;run-of-river;46.491614149632994;8.073903097757851\n" +
        "MR61;Mosnang;substation;47.536243416961504;8.037363246805002\n" +
        "EK57;Collombey-Muraz;run-of-river;46.91595808249041;7.954854525768409\n" +
        "PY64;Kloten;pumped storage;47.02530684624299;9.534358892279172\n" +
        "PA56;Delley-Portalban;pumped storage;46.90227348593297;7.7892694219194505\n" +
        "WE82;Jens;pumped storage;46.69042481261289;9.29116087456154\n" +
        "HB24;Baden;run-of-river;47.3426492961496;8.049926423982468\n" +
        "XP48;Staufen;substation;46.66894124706439;9.11938561648339\n" +
        "QK51;Wettswil am Albis;pumped storage;46.25510695936016;7.832222861508692\n" +
        "LJ54;Neerach;run-of-river;46.08114918416909;8.904514383787102\n" +
        "XJ20;Knonau;substation;46.16559796050054;8.334555736209024\n" +
        "YX28;Rougemont;substation;47.0819555170543;7.449344877556442\n" +
        "WM94;Mirchel;run-of-river;46.19841938165015;7.235629762637671\n" +
        "MV89;Gänsbrunnen;substation;47.74977382449287;9.492711906452165\n" +
        "SZ57;Langwies;substation;47.21920751715846;8.778099256033158\n" +
        "NR67;Vechigen;pumped storage;47.637949399188436;7.685047202737978\n" +
        "LW39;Riva San Vitale;pumped storage;47.51513512359252;8.325330561550276\n" +
        "YB69;Sévery;run-of-river;46.97019138561537;7.48995642434259\n" +
        "CF86;Zwieselberg;pumped storage;47.215289388155036;8.968502540582865\n" +
        "GE49;Steinerberg;run-of-river;46.24226775833679;7.4522394217184305\n" +
        "RZ42;Egnach;substation;46.98853796562652;8.594579556319662\n" +
        "WL31;Ramosch;pumped storage;46.30181930690945;7.607839271499651\n" +
        "MD62;Dierikon;substation;47.612995245196245;8.693549741735923\n" +
        "BZ85;Lauperswil;run-of-river;46.379377342617566;8.806959997068601\n" +
        "XD39;Walliswil bei Niederbipp;pumped storage;47.32265636395955;9.000467073424987\n" +
        "KD90;Trasadingen;pumped storage;46.41129768011738;8.135984409006833\n" +
        "HV21;Cully;run-of-river;46.153603413183994;9.03883701563517\n" +
        "EH78;Lucerne;run-of-river;46.64105106738126;9.185465324353517\n" +
        "TP58;Staufen;pumped storage;47.63543349789446;8.418075680363735\n" +
        "BB64;Domdidier;substation;46.44391350703544;8.68203371381399\n" +
        "RG83;Honau;run-of-river;46.18304781616976;9.586087078679475\n" +
        "MQ79;Rüti bei Lyssach;pumped storage;46.154353846994155;7.493819917969026\n" +
        "NT75;Menzingen;run-of-river;47.065889482232535;8.687131510201253\n" +
        "UT16;Savognin;substation;47.06891098666327;7.998596318572432\n" +
        "QS90;Baulmes;pumped storage;46.32560148636474;7.592023579034331\n" +
        "RW29;Riex;run-of-river;47.408599359369525;9.387117005594291\n" +
        "DM37;Hauptwil-Gottshaus;substation;47.713297933087915;7.675155676025868\n" +
        "ZU54;Nunningen;run-of-river;46.23342750264676;9.448483008944198\n" +
        "SR45;Chippis;substation;46.21227603072409;9.065649070499841\n" +
        "CV56;Roche (VD);substation;47.05920250860482;8.114668401489013\n" +
        "SE30;Sobrio;substation;47.72893188174812;7.85236342736566\n" +
        "CT76;Hofstetten-Flüh;run-of-river;47.1353396872276;7.74881661634766\n" +
        "JG14;Murgenthal;substation;47.126285661923056;9.133011165210025\n" +
        "RS51;Bottenwil;pumped storage;47.6918120743825;7.75521416915687\n" +
        "MK23;Grandson;substation;47.70305873593558;9.679067755505798\n" +
        "WT63;Zeneggen;pumped storage;46.501562749067325;8.48288711780552\n" +
        "YF89;Kleinlützel;pumped storage;46.65038246109983;7.521401439797919\n" +
        "DG55;Soral;run-of-river;47.32094784546241;8.816536088004867\n" +
        "XG83;Aarberg;substation;46.69443101140653;7.692789827745547\n" +
        "KF47;Rossens (FR);pumped storage;46.501071079297645;9.051978422376644\n" +
        "CK92;Ettingen;pumped storage;46.17921803344565;8.38509473865096\n" +
        "DV44;Bettlach;substation;47.58108345161683;7.234937863237625\n" +
        "YG93;Quarten;run-of-river;46.79442796752454;7.829238407764966\n" +
        "YV81;Saint-Blaise;run-of-river;46.4985724343116;9.19217111757831\n" +
        "NU32;Font;pumped storage;47.289506916455686;9.261111873533475\n" +
        "EK91;Vuisternens-devant-Romont;run-of-river;47.64976688782794;8.100379877387255\n" +
        "EN78;Bönigen;run-of-river;46.253971614580095;7.355638835414703\n" +
        "WY76;Aarburg;pumped storage;46.22309827818359;7.676378995146417\n" +
        "ZF47;Rue;run-of-river;46.435075991595454;7.229379881411684\n" +
        "TP27;Orselina;run-of-river;46.521131751878734;9.51902328451071\n" +
        "LR50;Bagnes;pumped storage;46.6766268273073;9.61116806691725\n" +
        "NX62;Ferrera;pumped storage;47.431672666889135;8.373356351777852\n" +
        "CB34;Flawil;run-of-river;47.2321763337643;9.563989479745894\n" +
        "KV70;Langendorf;pumped storage;47.629022789800665;7.87268648785201\n" +
        "TP12;Walterswil (BE);pumped storage;47.7174046092679;8.382920355438907\n" +
        "WZ50;Dachsen;run-of-river;46.49438956420337;8.966175658548831\n" +
        "WN46;Unterseen;run-of-river;46.651295739581805;8.315457557455709\n" +
        "SH73;Grüningen;pumped storage;46.91177376280935;8.535803085714717\n" +
        "AV66;Agarn;pumped storage;46.80882496253765;8.554339028169734\n" +
        "UZ65;Givisiez;run-of-river;47.476631000652574;7.212134436350054";

    const lines = table_str.split('\n');
    // const header = lines[0].split(';');

    const raw_rows = []
    for (let i = 0; i < lines.length; i++) {
        raw_rows.push(lines[i].split(';'))
    }

    return raw_rows;
}