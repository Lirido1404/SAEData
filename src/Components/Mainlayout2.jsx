import React, { useEffect, useState,useRef } from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillPieChartFill } from "react-icons/bs";
import { BsPieChart } from "react-icons/bs";
import { AiOutlineRadarChart } from "react-icons/ai";
import { MdBubbleChart } from "react-icons/md";
import { MdDonutLarge } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import {BsFillTrashFill} from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Flip } from "react-toastify";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import {
  Bar,
  Bubble,
  Doughnut,
  Pie,
  PolarArea,
  Radar,
  Scatter,
} from "react-chartjs-2";
import * as math from "mathjs";
import imgCovid from "../Images/covLogo2.png";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import * as THREE from 'three';
import { BiAdjust } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";
import { BiSolidSun } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaEarthAfrica } from "react-icons/fa6";
import { GiHastyGrave } from "react-icons/gi";
import { TbVaccine } from "react-icons/tb";
import { BiSolidVirus } from "react-icons/bi";
import { PiTestTubeFill } from "react-icons/pi";
import { BiGitCompare } from "react-icons/bi";
import gravevirus from "../Images/gravevirus.png"
import radarimg from "../Images/radarpng.png"
import { MoonLoader } from "react-spinners";
import infographie from "../Images/Infographie.pdf"
import infographiesanslegende from "../Images/Infographiesanslegendes.png";
import infographielegende from "../Images/infographielegendes2.png"
import { IoMdDownload } from "react-icons/io";
import truc1 from "../Images/truc1.png"
import truc2 from "../Images/truc2.png"
import truc3 from "../Images/truc3.png"
import truc4 from "../Images/truc4.png"
import truc5 from "../Images/truc5.png"
import truc6 from "../Images/truc6.png"



ChartJS.register(
  BarElement,
  CategoryScale,
  ArcElement,
  LinearScale,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);

function Mainlayout2({ isOpen, setIsOpen,openModal,handleMode,mode,setMode }) {
  
    const [country, setCountry] = useState("");
    const [country2, setCountry2] = useState("");
    const [cas10j, setCas10j] = useState([]);
    const [affChart, setAffChart] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [tableDate, setTableDate] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [allCountry, setAllCountry] = useState([]);
    const [moyenne, setMoyenne] = useState("");
    const [medianne, setMedianne] = useState("");
    const [variance, setVariance] = useState("");
    const [casActive, setCasActive] = useState(null);
    const [pop, setPop] = useState(null);
    const [deathsTT, setDeathsTT] = useState(null);
    const [selectedPie, setSelectedPie] = useState("Contagiosité");
    const [cas10jlength, setCas10jLength] = useState(0);
    const [guerisTT, setGuerisTT] = useState(null);
    const [nbrTestss, setNbrTestss] = useState(null);
    const [selectedCountry2, setSelectedCountry2] = useState("");
    const [nbrTest2, setNbrTest2] = useState(null);
    const [casActive2, setCasActive2] = useState(null);
    const [deathsTT2, setDeathsTT2] = useState(null);
    const [CasVrmActive, setCasVrmActive] = useState(null);
    const [recovered, setRecovered] = useState(null);
    const [casCritical, setCasCritical] = useState(null);
    const [casActiveEurope, setCasActiveEurope] = useState(null);
    const [casActiveAsia, setCasActiveAsia] = useState(null);
    const [casActiveOceania, setCasActiveOceania] = useState(null);
    const [casActiveAmerica, setCasActiveAmerica] = useState(null);
    const [casActiveAfrica, setCasActiveAfrica] = useState(null);
    const [continentPays, setContinentPays] = useState("");
    const [casTTMonde,setCasTTMonde] = useState(null);

    const [prctEurope1,setPrctEurope1] = useState("");
    const [prctAfrica1,setPrctAfrica1] = useState("");
    const [prctAsia1,setPrctAsia1] = useState("");
    const [prctAmerica1,setPrctAmerica1] = useState("");
    const [prctOceania1,setPrctOceania1] = useState("");

    const [clickRevenir,setClickRevenir] = useState(false);
    const [affInfoC1, setAffInfoC1] = useState(false);
    const [affInfoC2, setAffInfoC2] = useState(false);
    const [affInfoC3, setAffInfoC3] = useState(false);
    const [affInfoC4, setAffInfoC4] = useState(false);

    let imgSRC = null;
    const [imgSRC1,setImgSRC1] = useState(null);

    const [somme10J, setSomme10J] = useState([]);
    const [somme10JValue,setSomme10Jvalue] = useState(null);

    const [ecartType,setEcartType] = useState(null);
    const [selectedCountryTableau,setSelectedCountryTableau] = useState("");
    const [affPlanetee,setAffPlanette] = useState(true)

    const [plate1,setPlate1] = useState(false);
    const [plate2,setPlate2] = useState(false);
    const [plate3,setPlate3] = useState(false);
    const [plate4,setPlate4] = useState(false);


    const [affLeg,setAffLeg] = useState(true);


    const [bleuf1,setBleuF1] = useState("#34558B");
    const [bleuc2,setbleuc2] = useState("#488FB1");
    const [bleuc3,setBleuC3] = useState("#7fd3c4");
    const [bleuc4,setBleuC4] = useState("#57cc99");
    const [vertc1,setVertC1] = useState("#a0d995");
    const [vertc2,setVertC2] = useState("#D2E69c");

    const [ajoutClasseRouge,setAjoutClasseRouge] = useState(false);

    const clsRouge =()=>{
        setAjoutClasseRouge(true);
        setTimeout(() => {
            setAjoutClasseRouge(false);
        }, 1000);
        console.log(ajoutClasseRouge)
    }





    const fAffLeg =()=>{
    setAffLeg(!affLeg)
    }

  const affClickRevenir = () =>{
    setClickRevenir(!clickRevenir);
  }

  const afficherInfoC1 = () => {
    setAffInfoC1(!affInfoC1);
   
  };

  const afficherInfoC2 = () => {
    setAffInfoC2(!affInfoC2);
    
  };

  const afficherInfoC3 = () => {
    setAffInfoC3(!affInfoC3);
    
  };

  const afficherInfoC4 = () => {
    setAffInfoC4(!affInfoC4);
    
  };



  useEffect(() => {
    // Générer les dates des 10 derniers jours
    const dates = [];
    for (let j = 0; j < 10; j++) {
      let date = new Date();
      date.setDate(date.getDate() - j);
      let jour = date.getDate();
      let mois = date.getMonth() + 1;
      let annee = date.getFullYear();
      dates.push(`${jour}/${mois}/${annee}`);
    }
    setTableDate(dates.reverse()); // Inverser l'ordre des dates
  }, []);




  const data = {
    labels: [...tableDate.slice(0, 9), "Today"],
    datasets: [
      {
        label: "Nouveaux cas",
        data: cas10j,
        backgroundColor: bleuc3, // Remplacez la couleur ici
        borderRadius:7,
      },
    ],
  };

  const options = {
    plugins: {
        legend: {
          display: affLeg, // Utiliser directement le booléen
        },
      },
  };




  const data2 = {
    labels: ["Population TT", "Cas Covid-19"],
    datasets: [
      {
        label: "Data",
        data: [pop, casActive],
        backgroundColor: ["#F2F4F9", bleuc3],
        borderWidth: 1,
        hoverOffset: 5,
        borderColor: "#ffffff",
      },
    ],
  };

  const options2 = {
    plugins: {
      legend: {
        display: affLeg, // Utiliser directement le booléen
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };


  const dataPasAffChart1 = {
    labels: ["Population mondiale", "Nombre d'infections"],
    datasets: [
      {
        label: "Data",
        data: [7888000000, 770000000],
        backgroundColor: ["#DBDBDB", bleuc3],
        borderWidth: 1,
        hoverOffset: 5,
        borderColor: "white",
      },
    ],
  };

  const optionsPasAffChart1 = {
    plugins: {
      legend: {
        display: affLeg, 
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };


  const dataPasAffChart2 = {
    labels: ["0-20 ans", "20-29 ans","30-39 ans","40-49 ans","50-59 ans","60-69 ans"],
    datasets: [
      {
        label: "Létalité par age",
        data: [0.0003, 0.002,0.011,0.035,0.123,0.506],
        backgroundColor: bleuc3,
        borderWidth: 1,
        borderColor: "white",
        borderRadius:7,
      },
    ],
  };

  const optionsPasAffChart2 = {
    plugins: {
      legend: {
        display: affLeg, 
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };














  const data3 = {
    labels: ["Cas de Covid-19", "Morts"],
    datasets: [
      {
        label: "Data",
        data: [casActive, deathsTT],
        backgroundColor: [bleuc3, "#F2F4F9"],
        hoverOffset: 5,
      },
    ],
  };


  const options3 = {
    elements: {
      arc: {
        borderWidth: 1, // Pour supprimer les bordures du pie chart
      },
    },
    plugins: {
      legend: {
        display: affLeg, 
      },
    },
  };

  const dataRadar = {
    labels: ["Cas actuels", "Morts", "Cas guéris"],
    datasets: [
      {
        label: "Données COVID-19",
        data: [casActive, deathsTT, guerisTT],
        backgroundColor: bleuc3 + "80", // Couleur de fond
        borderColor: "#F2F4F9", // Couleur des bordures
        borderWidth: 2,
      },
    ],
  };

  const optionsRadar = {
    plugins: {
      legend: {
        display: affLeg, // Utiliser directement le booléen
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };





  const dataDoughnut = {
    labels: ['Europe', 'Afrique', 'Oceanie', "Asie", "Amerique"],
    datasets: [
      {
        label: 'Data',
        data: [casActiveEurope, casActiveAfrica, casActiveOceania, casActiveAsia, casActiveAmerica],
        backgroundColor: [
          continentPays === 'Europe' ? bleuf1 : bleuf1 + "42",
          continentPays === 'Africa' ? bleuc2 : bleuc2 + "42",
          continentPays === 'Oceania' ? bleuc3 : bleuc3 + "42",
          continentPays === 'Asia' ? vertc1 : vertc1 + "42",
          continentPays === 'North-America' || continentPays === 'South-America' ? vertc2 : vertc2 + "42"
        ],
        borderColor : [
          continentPays === 'Europe' ? 'white' : 'rgb(238, 238, 238)',
          continentPays === 'Africa' ? 'white' : 'rgb(238, 238, 238)',
          continentPays === 'Oceania' ? 'white' : 'rgb(238, 238, 238)',
          continentPays === 'Asia' ? 'white' : 'rgb(238, 238, 238)',
          continentPays === 'North-America' || continentPays === 'South-America' ? 'white' : 'rgb(238, 238, 238)'
        ],
      },
    ],
  };
  
  const optionsDoughnut = {
    plugins: {
        legend: {
          display: affLeg, // Utiliser directement le booléen
        },
      },
    elements: {
      arc: {
        borderWidth: [
          continentPays === 'Europe' ? '2' : '1',
          continentPays === 'Africa' ? '2' : '1',
          continentPays === 'Oceania' ? '2' : '1',
          continentPays === 'Asia' ? '2' : '1',
          continentPays === 'North-America' || continentPays === 'South-America' ? '2' : '1'
        ],
        
      },
    },
  };


  const dataDoughnut2 = {
    labels: ['Europe', 'Afrique', 'Oceanie', "Asie", "Amerique"],
    datasets: [
      {
        label: 'Data',
        data: [casActiveEurope, casActiveAfrica, casActiveOceania, casActiveAsia, casActiveAmerica],
        backgroundColor: [
          bleuf1,
          bleuc2,
          bleuc3,
          vertc1,
          vertc2
        ],
        borderColor : [
         'white',
         'white',
         'white',
         'white',
         'white'
        ],
      },
    ],
  };
  
  const optionsDoughnut2 = {
    plugins: {
        legend: {
          display: affLeg, 
        },
      },
      
    elements: {
      arc: {
        borderWidth: [
          '2',
           '2',
          '2',
           '2',
          '2'
        ],
        
      },
    },
  };











  const polarAreadata = {
    labels: ['Europe', 'Afrique', 'Oceanie', "Asie", "Amerique","Moyen-orient"],
    datasets: [
      {
        label: '% vaccinés/cont',
        data: [70, 37, 82, 82, 82,58],
        backgroundColor: [
          bleuf1,
          bleuc2,
          bleuc3,
          vertc1,
          vertc2,
          "#d0db3d"
        ],
        borderColor : [
         'white',
         'white',
         'white',
         'white',
         'white',
         'white'
        ],
      },
    ],
  };
  
  const polarAreaoptions = {
    plugins: {
        legend: {
          display: affLeg, 
          position:"left",
        },
      },
    elements: {
      arc: {
        borderWidth: [
          '2',
           '2',
          '2',
           '2',
          '2',
          "2"
        ],
        
      },
    },
  };




















  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/history",
      params: {
        country: `${selectedCountry}`,
      },
      headers: {
        "X-RapidAPI-Key": "ddf7b2e79emsh303cb203d7a56bcp1a3350jsnf8621e2cb720",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    };


    try {
      setAffChart(false);
      setIsLoading(true);
      const response = await axios.request(options);
      console.log(response);
      
      

      const casTT = response.data.response[0].cases.total;
      const pop = response.data.response[0].population;
      const deathsTT = response.data.response[0].deaths.total;
      const guerisTT = response.data.response[0].cases.recovered;
      const nbrTests = response.data.response[0].tests.total;
      const casVrmActive = response.data.response[0].cases.active;
      const casCritical = response.data.response[0].cases.critical;
      const recovered = response.data.response[0].cases.recovered;
      const continent = response.data.response[0].continent;
      setContinentPays(continent);
      


      setCasActive(casTT);
      setPop(pop);
      setDeathsTT(deathsTT);
      setGuerisTT(guerisTT);
      setNbrTestss(nbrTests);
      setCasCritical(casCritical);
      setCasVrmActive(casVrmActive);
      setRecovered(recovered);



      

      const nouveauxCas = [];
      for (let i = 0; i < 10; i++) {
        if (i < response.data.response.length) {
          const nouveauCasJour = response.data.response[i].cases.new;

          const nouveauCasInt = parseInt(nouveauCasJour, 10);

          nouveauxCas.push(nouveauCasInt);
        } else {
          console.log("Pas assez de données pour les 10 derniers jours.");
          
        }
      }
      
      setCas10j(nouveauxCas);

      const zeroOrNaNCount = nouveauxCas.filter(
        (value) => value === 0 || isNaN(value)
      ).length;

      if (zeroOrNaNCount >= 1) {
        toast.warn("Des données peuvent manquer...", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
      } else {
        toast.success("Graphique mis à jour", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
          });
      }
      setAffChart(true);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      
      
    }finally {
      setIsLoading(false);
    }
  };

  const returnLoading = () =>{
    
    while(isLoading){
      return (
        <>
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 flex justify-center items-center loaderrr">
                  <MoonLoader color="white" size={80}/>
          </div>
        </>
      )
    }
  }





  const calculerSomme = () =>{
    const somme = somme10J.reduce((acc, valeur) => acc + valeur, 0);
    if(somme === 0){
        setSomme10Jvalue("Aucune donnée de");
    }else{
         setSomme10Jvalue(somme);
    }
   
    
  }

useEffect(()=>{
    calculerSomme();
},[fetchData])

  


  const fetchDataDesCountry = async () => {
    const options = {
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/countries",
      headers: {
        "X-RapidAPI-Key": "ddf7b2e79emsh303cb203d7a56bcp1a3350jsnf8621e2cb720",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      

      // Récupérer la liste des noms de pays à partir de la réponse
      const countryNames = response.data.response.map((country) => country);

      // Mettre à jour le tableau AllCountry avec la liste des noms de pays
      setAllCountry((prev) => [...prev, ...countryNames]);
    } catch (error) {
      console.error(error);
    }
  };




  const calculateMean = () => {
    // Filtrer les valeurs invalides (NaN) du tableau cas10j
    const filteredData = cas10j.filter(value => !isNaN(value) && value !== null);
    
    
  
    if (filteredData.length > 0) {
      const cas10jLength = filteredData.length;
      setCas10jLength(cas10jLength);
      const median = math.round(math.median(filteredData));
      const average = math.round(math.mean(filteredData));
      const variancee = math.round(math.variance(filteredData));
      const ectype = Math.round(Math.sqrt(variancee));
      setSomme10J(filteredData);
      // Mettre à jour l'état "moyenne" avec la moyenne calculée
      setMoyenne(average);
      setMedianne(median);
      setVariance(variancee);
      setEcartType(ectype);
    } else {
      // Aucune valeur valide dans cas10j
      setMoyenne("Aucune donnée");
      setVariance("Aucune donnée");
      setMedianne("Aucune donnée");
    }
  };

  useEffect(() => {
    // Appelle la fonction de calcul de la moyenne à chaque mise à jour de cas10j
    calculateMean();
  }, [cas10j]);




  useEffect(() => {
    fetchDataDesCountry();
  }, []);

  const handleChange = (e) => {
    setSelectedPie(e.target.value);
    
  };

  

  










  const fetchDataGlobal = async () => {
    const currentDate = new Date().toISOString().split('T')[0]; // Obtiens la date actuelle au format AAAA-MM-JJ
  
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      headers: {
        'X-RapidAPI-Key': 'ddf7b2e79emsh303cb203d7a56bcp1a3350jsnf8621e2cb720',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log(response)
      
      const europeData = response.data.response.filter(countryData => countryData.continent === "Europe");
      const africaData = response.data.response.filter(countryData => countryData.continent === "Africa");
      const asiaData = response.data.response.filter(countryData => countryData.continent === "Asia");
      const OceanieData = response.data.response.filter(countryData => countryData.continent === "Oceania");
      const NorthAmerica = response.data.response.filter(countryData => countryData.continent === "North-America");
      const SouthAmerica = response.data.response.filter(countryData => countryData.continent === "South-America");
  
      let totalActiveCasesEurope = 0;
      europeData.forEach(country => {
        totalActiveCasesEurope += country.cases.active;
      });
  
      let totalActiveCasesAfrica = 0;
      africaData.forEach(country => {
        totalActiveCasesAfrica += country.cases.active;
      });
  
      let totalActiveCasesAsia = 0;
      asiaData.forEach(country => {
        totalActiveCasesAsia += country.cases.active;
      });
  
      let totalActiveCasesOceania = 0;
      OceanieData.forEach(country => {
        totalActiveCasesOceania += country.cases.active;
      });
  
      let totalActiveCasesNOrthAmerica = 0;
      NorthAmerica.forEach(country => {
        totalActiveCasesNOrthAmerica += country.cases.active;
      });
  
      let totalActiveCasesSouthAmerica = 0;
      SouthAmerica.forEach(country => {
        totalActiveCasesSouthAmerica += country.cases.active;
      });
  
  
      let CasTTAmerique = totalActiveCasesNOrthAmerica + totalActiveCasesSouthAmerica;
      let CasTTCovidMonde = totalActiveCasesEurope + totalActiveCasesAfrica + totalActiveCasesAsia + totalActiveCasesOceania + CasTTAmerique;
      setCasTTMonde(CasTTCovidMonde);
  
      let prctEurope = Math.round((100 * totalActiveCasesEurope) / CasTTCovidMonde) + ' %';
      let prctAfrica = Math.round((100 * totalActiveCasesAfrica) / CasTTCovidMonde) + ' %';
      let prctAsia = Math.round((100 * totalActiveCasesAsia) / CasTTCovidMonde) + ' %';
      let prctOceania = Math.round((100 * totalActiveCasesOceania) / CasTTCovidMonde) + ' %';
      let prctAmerica= Math.round((100 * CasTTAmerique) / CasTTCovidMonde) + ' %';


      
  
      setCasActiveAfrica(totalActiveCasesAfrica);
      setCasActiveAmerica(CasTTAmerique);
      setCasActiveAsia(totalActiveCasesAsia);
      setCasActiveEurope(totalActiveCasesEurope);
      setCasActiveOceania(totalActiveCasesOceania);
  
  
      setPrctEurope1(prctEurope);
      setPrctAfrica1(prctAfrica);
      setPrctAsia1(prctAsia);
      setPrctOceania1(prctOceania);
      setPrctAmerica1(prctAmerica);

    } catch (error) {
      console.error(error);
    }
  };
  
  
  useEffect(()=>{
    fetchDataGlobal();
  },[])
















  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
        const { ctx } = chart;
        ctx.save();
        ctx.font = 'bolder 30px sans-serif ';


        let colorTextt = '';

        switch (continentPays){
            case "Asia":
            colorTextt = vertc1
                break;
            case "Europe":
            colorTextt = bleuf1
                break;
            case "Africa":
            colorTextt = bleuc2
                break;
            case "Oceania":
            colorTextt = bleuc3
                break;
            case "North-America" || "South-America":
            colorTextt = vertc2
                break;
            default:
                colorTextt = '';
                break;
        }


        ctx.fillStyle = colorTextt ;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        let textToDisplay = '';

        switch (continentPays) {
            case "Asia":
                textToDisplay = prctAsia1;
                break;
            case "Europe":
                textToDisplay = prctEurope1;
                break;
            case "Africa":
                textToDisplay = prctAfrica1;
                break;
            case "Oceania":
                textToDisplay = prctOceania1;
                break;
            case "North-America" || "South-America":
                textToDisplay = prctAmerica1;
                break;
            default:
                textToDisplay = '';
                break;
        }

        ctx.fillText(textToDisplay, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
    }
}






  const returnCard3Infos = () =>{
    if(affChart){
        return (
            <>
                 
            
                 <div className="h-full w-full relative ">
                    
                    
                    <div className="flex w-full h-full justify-center items-center ">
                        <div className="w-[80%] ">
                          <Doughnut data={dataDoughnut} options={optionsDoughnut} plugins={[textCenter]}/>
                        </div>
                    </div>
                    
                    <p className="absolute bottom-0 left-0 px-4 py-2 text-[20px] font-bold text-vertc1 infosRapide"> {casTTMonde} Cas Covid Monde</p>
                    
                 </div>
                    
              
            </>
          );
    }
  }






  const maxRadius = 10;
  const minRadius = 4;
  
  // Fonction pour limiter les valeurs dans la plage autorisée
  function limitValue(value) {
    return Math.max(minRadius, Math.min(value, maxRadius));
  }


  const dataBubble = {
    datasets: [
      {
        label: selectedCountry,
        data: [
          { x: nbrTestss, y: casActive, r: limitValue(deathsTT)},
         
         
        ],
        backgroundColor: bleuc3, 
        borderColor: 'white',
        borderWidth: 2, 
      },
      {
        label: selectedCountry2,
        data: [
          
          { x: nbrTest2, y: casActive2, r: limitValue(deathsTT2)},
         
        ],
        backgroundColor: vertc1, 
        borderColor: 'white',
        borderWidth: 2, 
      }
    ],
  };
  
  const optionsBubble = {
    plugins: {
      legend: {
        display: affLeg, 
      },
    },
    scales: {
    
      x: {
        title: {
          display: true,
          text: 'Nombre de tests TT',
          color: 'black', // Couleur du titre de l'axe x
          font: {
            weight: 'bold',
          },
        },
        beginAtZero: true,
      },
      y: {
        title: {
          display: true,
          text: 'Nombre de cas TT',
          color: 'black', // Couleur du titre de l'axe y
          font: {
            weight: 'bold',
          },
        },
        beginAtZero: true,
      },
    },
  };








useEffect(()=>{
    if(selectedCountry2){
        toast.success('Graphique mis à jour', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            });
    }
},[selectedCountry2])

const fetchDatabubble = async () =>{
    const currentDate = new Date().toISOString().split('T')[0]; // Obtiens la date actuelle au format AAAA-MM-JJ
    
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/history',
      params: {
        country: `${selectedCountry2}`,
        day: currentDate,
      },
      headers: {
        'X-RapidAPI-Key': 'ddf7b2e79emsh303cb203d7a56bcp1a3350jsnf8621e2cb720',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      
      const nbrTests = response.data.response[0].tests.total; 
      const casTT = response.data.response[0].cases.total;
      const deathsTT = response.data.response[0].deaths.total;
  
      
      setNbrTest2(nbrTests);
      
      setCasActive2(casTT);
      setDeathsTT2(deathsTT)
    } catch (error) {
      console.error(error);
    }
  }
  
  
  useEffect(()=>{
    fetchDatabubble();
  },[selectedCountry2])




















  

  const etatP1 = ()=>{
    setPlate1(!plate1);
  }


  

  const etatP2 = ()=>{
    setPlate2(!plate2);
  }

  

  const etatP3 = ()=>{
    setPlate3(!plate3);
  }


  

  const etatP4 = ()=>{
    setPlate4(!plate4);
  }

  const etatP2P3P4 = ()=>{
    setPlate2(false);
    setPlate3(false);
    setPlate4(false);
  }

  const etatP1P3P4 = ()=>{
    setPlate1(false);
    setPlate3(false);
    setPlate4(false);
  }

  const etatP1P2P4 = ()=>{
    setPlate1(false);
    setPlate2(false);
    setPlate4(false);
  }

  const etatP1P2P3 = ()=>{
    setPlate1(false);
    setPlate2(false);
    setPlate3(false);
  }

  


  const [ouvrDiv,setOuvrDiv] = useState(false);
const ouvrirDiv = ()=>{
    setOuvrDiv(!ouvrDiv);
}

const renderTextP1 = ()=>{
  if(ouvrDiv && plate1){
    return (
      <>
      <div className="textRep">
        <p className="text-[12px] w-[95%] mx-auto">
            Cette moyenne de <span className="font-bold"> "{moyenne}"</span> permet de comprendre si le COVID-19 est contagieux ces derniers temps dans ce pays. En l'occurence ce virus est peu contagieux ces derniers temps en {selectedCountry}.
        </p>
      </div>
      </>
    )
  }else if(ouvrDiv && plate2){
      return (
        <>
        <div className="textRep">
        <p className="text-[12px] w-[95%] mx-auto">Cette mediane de <span className="font-bold"> "{medianne}"</span> permet de comprendre si le COVID-19 est contagieux ces derniers temps dans ce pays en n'étant pas innfluencé par des valeurs extrêmes, plus elle est proche de la moyenne, plus les informations sont robustes. Ici, nos donnnées sont robustes. </p>
        </div>
        </>
      )

  }else if(ouvrDiv && plate3){
    return (
      <>
      <div className="textRep">
      <p className="text-[12px] w-[95%] mx-auto">Cette variance de <span className="font-bold"> "{variance}" </span>permet de comprendre si la propogation du virus est stable récemment. Plus elle est faible par rapport à la moyenne, plus la propagation est stable. Ici, elle est plus ou moins stable</p>
      </div>
      </>
    )
  }else if(ouvrDiv && plate4){
    return (
      <>
      <div className="textRep">
      <p className="text-[12px] w-[95%] mx-auto">Objectif similaire à cellui de variance, comprendre si la propagation du virus est stable. Ici, elle l'est.</p>
      </div>
      </>
    )
  }
}






const returnBarData = () =>{
    if(affChart){
        return(
            <>
            <div className="h-full w-full flex">
            <div className="w-[50%]  p-8 flex justify-center flex-col items-center relative ">
                <p className="absolute bottom-0 left-0 px-4 py-2 font-bold text-bleuf1] text-[20px] infosRapide text-vertc1">{somme10JValue} Cas de Covid ces 10 derniers jours </p>
                
                <Bar data={data} options={options} />
            </div>
            <div className="w-[50%]">
                <div className="flex justify-center pt-2">
                    <h2 className="text-[20px] font-bold h2Inf">Informations</h2>
                </div>
              <div className="gridtableaumoyenne w-full h-[25%]">


                  <div className="plate shadow-md border-2 border-bleuc2 relative" >
                    <div className="h-full w-full flex flex-col justify-center items-center">
                      <p>Moyenne <i>( Sur {cas10jlength} jours )</i></p>
                      <p className="font-bold">{moyenne}</p>
                    </div> 
                    <div className="absolute bottom-0 right-0 m-1">
                    <div className="w-8 h-8 flex justify-center items-center cursor-pointer" onClick={()=>{etatP2P3P4();ouvrirDiv();etatP1()}}>
                        <div className="pulse relative">
                          <div className="absolute w-full h-full flex justify-center items-center z-10"><BsChatSquareText color="white" size={18}  className='iconnn'  /></div>
                        
                        

                          <span style={{'--i': 0}}></span>
                          <span style={{'--i': 1}}></span>
                        </div>
                      </div>
                    </div>
                    
                  </div>


                 


                  <div className="plate shadow-md border-2 border-bleuc2 relative">
                  <div className="h-full w-full flex flex-col justify-center items-center">
                      <p>Variance <i>( Sur {cas10jlength} jours )</i></p>
                      <p className="font-bold">{variance}</p>
                    </div> 
                    <div className="absolute bottom-0 right-0 m-1">
                    <div className="w-8 h-8 flex justify-center items-center cursor-pointer" onClick={()=>{etatP1P2P4();ouvrirDiv();etatP3()}}>
                        <div className="pulse relative">
                          <div className="absolute w-full h-full flex justify-center items-center z-10"><BsChatSquareText color="white" size={18}  className='iconnn' /></div>
                        
                        

                          <span style={{'--i': 0}}></span>
                          <span style={{'--i': 1}}></span>
                        </div>
                      </div>
                    </div>
                  </div>


                  
              </div>
          
              
                <div className={`max-w-[90%] m-auto bg-white rounded-lg shadow-md border-2 border-bleuc2 ${ouvrDiv ? 'max-h-16' : 'max-h-0'} ease-in-out duration-300 repPlate`}>
                  {renderTextP1()}
                </div>
              
            
              

            </div>
            
        </div>
            </>
        )
    }
}




useEffect(()=>{
   if(affChart){
    switch(selectedCountry){
        case "Ukraine" : 
        imgSRC = "https://flagcdn.com/w80/ua.png";
        setImgSRC1(imgSRC);
        break;
        case "Afghanistan" : 
        imgSRC = "https://flagcdn.com/w80/af.png";
        setImgSRC1(imgSRC);
        break;
        case "Albania" : 
        imgSRC = "https://flagcdn.com/w80/al.png";
        setImgSRC1(imgSRC);
        break;
        case "Algeria" : 
        imgSRC = "https://flagcdn.com/w80/dz.png";
        setImgSRC1(imgSRC);
        break;
        case "Andorra" : 
        imgSRC = "https://flagcdn.com/w80/ad.png";
        setImgSRC1(imgSRC);
        break;
        case "Angola" : 
        imgSRC = "https://flagcdn.com/w80/ao.png";
        setImgSRC1(imgSRC);
        break;
        case "Anguilla" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Antigua-and-Barbuda" : 
        imgSRC = "https://flagcdn.com/w80/ag.png";
        setImgSRC1(imgSRC);
        break;
        case "Argentina" : 
        imgSRC = "https://flagcdn.com/w80/ar.png";
        setImgSRC1(imgSRC);
        break;
        case "Armenia" : 
        imgSRC = "https://flagcdn.com/w80/ar.png";
        setImgSRC1(imgSRC);
        break;
        case "Aruba" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Australia" : 
        imgSRC = "https://flagcdn.com/w80/au.png";
        setImgSRC1(imgSRC);
        break;
        case "Austria" : 
        imgSRC = "https://flagcdn.com/w80/at.png";
        setImgSRC1(imgSRC);
        break;
        case "Azerbaijan" : 
        imgSRC = "https://flagcdn.com/w80/az.png";
        setImgSRC1(imgSRC);
        break;
        case "Bahamas" : 
        imgSRC = "https://flagcdn.com/w80/bs.png";
        setImgSRC1(imgSRC);
        break;
        case "Barhain" : 
        imgSRC = "https://flagcdn.com/w80/bh.png";
        setImgSRC1(imgSRC);
        break;
        case "Bangladesh" : 
        imgSRC = "https://flagcdn.com/w80/bd.png";
        setImgSRC1(imgSRC);
        break;
        case "Barbados" : 
        imgSRC = "https://flagcdn.com/w80/bb.png";
        setImgSRC1(imgSRC);
        break;
        case "Belarus" : 
        imgSRC = "https://flagcdn.com/w80/by.png";
        setImgSRC1(imgSRC);
        break;
        case "Belgium" : 
        imgSRC = "https://flagcdn.com/w80/be.png";
        setImgSRC1(imgSRC);
        break;
        case "Belize" : 
        imgSRC = "https://flagcdn.com/w80/bz.png";
        setImgSRC1(imgSRC);
        break;
        case "Benin" : 
        imgSRC = "https://flagcdn.com/w80/bj.png";
        setImgSRC1(imgSRC);
        break;
        case "Bermuda" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "bhutan" : 
        imgSRC = "https://flagcdn.com/w80/bt.png";
        setImgSRC1(imgSRC);
        break;
        case "Bolivia" : 
        imgSRC = "https://flagcdn.com/w80/bo.png";
        setImgSRC1(imgSRC);
        break;
        case "Bosnia-and-Herzegovina" : 
        imgSRC = "https://flagcdn.com/w80/ba.png";
        setImgSRC1(imgSRC);
        break;
        case "Botswana" : 
        imgSRC = "https://flagcdn.com/w80/bw.png";
        setImgSRC1(imgSRC);
        break;
        case "brazil" : 
        imgSRC = "https://flagcdn.com/w80/br.png";
        setImgSRC1(imgSRC);
        break;
        case "British-Virgin-Islands" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Brunei" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Bulgaria" : 
        imgSRC = "https://flagcdn.com/w80/bg.png";
        setImgSRC1(imgSRC);
        break;
        case "Burkina-Faso" : 
        imgSRC = "https://flagcdn.com/w80/bf.png";
        setImgSRC1(imgSRC);
        break;
        case "Burundi" : 
        imgSRC = "https://flagcdn.com/w80/bi.png";
        setImgSRC1(imgSRC);
        break;
        case "Cabo-Verde" : 
        imgSRC = "https://flagcdn.com/w80/cv.png";
        setImgSRC1(imgSRC);
        break;
        case "Cambodia" : 
        imgSRC = "https://flagcdn.com/w80/kh.png";
        setImgSRC1(imgSRC);
        break;
        case "Cameroon" : 
        imgSRC = "https://flagcdn.com/w80/cm.png";
        setImgSRC1(imgSRC);
        break;
        case "Canada" : 
        imgSRC = "https://flagcdn.com/w80/ca.png";
        setImgSRC1(imgSRC);
        break;
        case "CAR" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Caribbean-Netherlands" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Cayman-Islands" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Chile" : 
        imgSRC = "https://flagcdn.com/w80/cl.png";
        setImgSRC1(imgSRC);
        break;
        case "China" : 
        imgSRC = "https://flagcdn.com/w80/cn.png";
        setImgSRC1(imgSRC);
        break;
        case "Colombia" : 
        imgSRC = "https://flagcdn.com/w80/co.png";
        setImgSRC1(imgSRC);
        break;
        case "Comoros" : 
        imgSRC = "https://flagcdn.com/w80/km.png";
        setImgSRC1(imgSRC);
        break;
        case "Congo" : 
        imgSRC = "https://flagcdn.com/w80/cg.png";
        setImgSRC1(imgSRC);
        break;
        case "Cook-Islands" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Costa-Rica" : 
        imgSRC = "https://flagcdn.com/w80/cr.png";
        setImgSRC1(imgSRC);
        break;
        case "Croatia" : 
        imgSRC = "https://flagcdn.com/w80/hr.png";
        setImgSRC1(imgSRC);
        break;
        case "Cuba" : 
        imgSRC = "https://flagcdn.com/w80/cu.png";
        setImgSRC1(imgSRC);
        break;
        case "Cura&ccedil;ao" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Cyprus" : 
        imgSRC = "https://flagcdn.com/w80/cy.png";
        setImgSRC1(imgSRC);
        break;
        case "czechia" : 
        imgSRC = "https://flagcdn.com/w80/cz.png";
        setImgSRC1(imgSRC);
        break;
        case "Denmark" : 
        imgSRC = "https://flagcdn.com/w80/dk.png";
        setImgSRC1(imgSRC);
        break;
        case "Diamond-Princess" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Djibouti" : 
        imgSRC = "https://flagcdn.com/w80/dj.png";
        setImgSRC1(imgSRC);
        break;
        case "Dominica" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Dominican-Republic" : 
        imgSRC = "https://flagcdn.com/w80/do.png";
        setImgSRC1(imgSRC);
        break;
        case "DPRK" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "DRC" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Ecuador" : 
        imgSRC = "https://flagcdn.com/w80/ec.png";
        setImgSRC1(imgSRC);
        break;
        case "Egypt" : 
        imgSRC = "https://flagcdn.com/w80/eg.png";
        setImgSRC1(imgSRC);
        break;
        case "El-Salvador" : 
        imgSRC = "https://flagcdn.com/w80/sv.png";
        setImgSRC1(imgSRC);
        break;
        case "Quatorial-Guinea" : 
        imgSRC = "https://flagcdn.com/w80/qg.png";
        setImgSRC1(imgSRC);
        break;
        case "Eritrea" : 
        imgSRC = "https://flagcdn.com/w80/er.png";
        setImgSRC1(imgSRC);
        break;
        case "Estonia" : 
        imgSRC = "https://flagcdn.com/w80/ee.png";
        setImgSRC1(imgSRC);
        break;
        case "Eswatini" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Ethiopia" : 
        imgSRC = "https://flagcdn.com/w80/et.png";
        setImgSRC1(imgSRC);
        break;
        case "Faeroe-Islands" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Falkland-Islands" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Fiji" : 
        imgSRC = "https://flagcdn.com/w80/fj.png";
        setImgSRC1(imgSRC);
        break;
        case "Finland" : 
        imgSRC = "https://flagcdn.com/w80/fi.png";
        setImgSRC1(imgSRC);
        break;
        case "France" : 
        imgSRC = "https://flagcdn.com/w80/fr.png";
        setImgSRC1(imgSRC);
        break;
        case "French-Guiana" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "French-Polynesia" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Gabon" : 
        imgSRC = "https://flagcdn.com/w80/ga.png";
        setImgSRC1(imgSRC);
        break;
        case "Gambia" : 
        imgSRC = "https://flagcdn.com/w80/gm.png";
        setImgSRC1(imgSRC);
        break;
        case "Georgia" : 
        imgSRC = "https://flagcdn.com/w80/ge.png";
        setImgSRC1(imgSRC);
        break;
        case "Germany" : 
        imgSRC = "https://flagcdn.com/w80/de.png";
        setImgSRC1(imgSRC);
        break;
        case "Ghana" : 
        imgSRC = "https://flagcdn.com/w80/gh.png";
        setImgSRC1(imgSRC);
        break;
        case "Gibraltar" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Greece" : 
        imgSRC = "https://flagcdn.com/w80/gr.png";
        setImgSRC1(imgSRC);
        break;
        case "Greenland" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Grenada" : 
        imgSRC = "https://flagcdn.com/w80/gd.png";
        setImgSRC1(imgSRC);
        break;
        case "Guadeloupe" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Guatemala" : 
        imgSRC = "https://flagcdn.com/w80/gt.png";
        setImgSRC1(imgSRC);
        break;
        case "Guinea" : 
        imgSRC = "https://flagcdn.com/w80/gn.png";
        setImgSRC1(imgSRC);
        break;
        case "Guinea-Bissau" : 
        imgSRC = "https://flagcdn.com/w80/gw.png";
        setImgSRC1(imgSRC);
        break;
        case "Guyana" : 
        imgSRC = "https://flagcdn.com/w80/gy.png";
        setImgSRC1(imgSRC);
        break;
        case "Haiti" : 
        imgSRC = "https://flagcdn.com/w80/ht.png";
        setImgSRC1(imgSRC);
        break;
        case "Honduras" : 
        imgSRC = "https://flagcdn.com/w80/hn.png";
        setImgSRC1(imgSRC);
        break;
        case "Hong-Kong" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Hungary" : 
        imgSRC = "https://flagcdn.com/w80/hu.png";
        setImgSRC1(imgSRC);
        break;
        case "Iceland" : 
        imgSRC = "https://flagcdn.com/w80/is.png";
        setImgSRC1(imgSRC);
        break;
        case "India" : 
        imgSRC = "https://flagcdn.com/w80/in.png";
        setImgSRC1(imgSRC);
        break;
        case "Indonesia" : 
        imgSRC = "https://flagcdn.com/w80/id.png";
        setImgSRC1(imgSRC);
        break;case "Iran" : 
        imgSRC = "https://flagcdn.com/w80/ir.png";
        setImgSRC1(imgSRC);
        break;
        case "Iraq" : 
        imgSRC = "https://flagcdn.com/w80/iq.png";
        setImgSRC1(imgSRC);
        break;
        case "Isle-of-Man" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Israel" : 
        imgSRC = "https://flagcdn.com/w80/il.png";
        setImgSRC1(imgSRC);
        break;
        case "Italy" : 
        imgSRC = "https://flagcdn.com/w80/it.png";
        setImgSRC1(imgSRC);
        break;
        case "Ivory-Coast" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Jamaica" : 
        imgSRC = "https://flagcdn.com/w80/jm.png";
        setImgSRC1(imgSRC);
        break;
        case "Japan" : 
        imgSRC = "https://flagcdn.com/w80/jp.png";
        setImgSRC1(imgSRC);
        break;
        case "Jordan" : 
        imgSRC = "https://flagcdn.com/w80/jo.png";
        setImgSRC1(imgSRC);
        break;
        case "Kazakhstan" : 
        imgSRC = "https://flagcdn.com/w80/kz.png";
        setImgSRC1(imgSRC);
        break;
        case "Kenya" : 
        imgSRC = "https://flagcdn.com/w80/kz.png";
        setImgSRC1(imgSRC);
        break;
        case "Kiribati" : 
        imgSRC = "https://flagcdn.com/w80/ki.png";
        setImgSRC1(imgSRC);
        break;
        case "Kuwait" : 
        imgSRC = "https://flagcdn.com/w80/kw.png";
        setImgSRC1(imgSRC);
        break;
        case "Kyrgyztan" : 
        imgSRC = "https://flagcdn.com/w80/kg.png";
        setImgSRC1(imgSRC);
        break;
        case "Laos" : 
        imgSRC = "https://flagcdn.com/w80/la.png";
        setImgSRC1(imgSRC);
        break;
        case "Latvia" : 
        imgSRC = "https://flagcdn.com/w80/lv.png";
        setImgSRC1(imgSRC);
        break;
        case "Lebanon" : 
        imgSRC = "https://flagcdn.com/w80/lb.png";
        setImgSRC1(imgSRC);
        break;
        case "Lesotho" : 
        imgSRC = "https://flagcdn.com/w80/ls.png";
        setImgSRC1(imgSRC);
        break;
        case "Liberia" : 
        imgSRC = "https://flagcdn.com/w80/lr.png";
        setImgSRC1(imgSRC);
        break;
        case "Libya" : 
        imgSRC = "https://flagcdn.com/w80/ly.png";
        setImgSRC1(imgSRC);
        break;
        case "Liechtenstein" : 
        imgSRC = "https://flagcdn.com/w80/li.png";
        setImgSRC1(imgSRC);
        break;
        case "Lithuania" : 
        imgSRC = "https://flagcdn.com/w80/lt.png";
        setImgSRC1(imgSRC);
        break;
        case "Luxembourg" : 
        imgSRC = "https://flagcdn.com/w80/lu.png";
        setImgSRC1(imgSRC);
        break;
        case "Macao" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Madagascar" : 
        imgSRC = "https://flagcdn.com/w80/mg.png";
        setImgSRC1(imgSRC);
        break;
        case "Malawi" : 
        imgSRC = "https://flagcdn.com/w80/mw.png";
        setImgSRC1(imgSRC);
        break;
        case "Malaysia" : 
        imgSRC = "https://flagcdn.com/w80/my.png";
        setImgSRC1(imgSRC);
        break;
        case "Maldives" : 
        imgSRC = "https://flagcdn.com/w80/mv.png";
        setImgSRC1(imgSRC);
        break;
        case "Mali" : 
        imgSRC = "https://flagcdn.com/w80/ml.png";
        setImgSRC1(imgSRC);
        break;
        case "Matla" : 
        imgSRC = "https://flagcdn.com/w80/mt.png";
        setImgSRC1(imgSRC);
        break;
        case "Marshall-Islands" : 
        imgSRC = "https://flagcdn.com/w80/mh.png";
        setImgSRC1(imgSRC);
        break;
        case "Martinique" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Mauritania" : 
        imgSRC = "https://flagcdn.com/w80/mr.png";
        setImgSRC1(imgSRC);
        break;
        case "Mauritius" : 
        imgSRC = "https://flagcdn.com/w80/mu.png";
        setImgSRC1(imgSRC);
        break;
        case "Mayotte" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Mexico" : 
        imgSRC = "https://flagcdn.com/w80/mx.png";
        setImgSRC1(imgSRC);
        break;
        case "Micronesia" : 
        imgSRC = "https://flagcdn.com/w80/fm.png";
        setImgSRC1(imgSRC);
        break;
        case "Moldova" : 
        imgSRC = "https://flagcdn.com/w80/md.png";
        setImgSRC1(imgSRC);
        break;
        case "Monaco" : 
        imgSRC = "https://flagcdn.com/w80/mc.png";
        setImgSRC1(imgSRC);
        break;
        case "Mongolia" : 
        imgSRC = "https://flagcdn.com/w80/mn.png";
        setImgSRC1(imgSRC);
        break;
        case "Montenegro" : 
        imgSRC = "https://flagcdn.com/w80/me.png";
        setImgSRC1(imgSRC);
        break;
        case "Montserrat" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Morocco" : 
        imgSRC = "https://flagcdn.com/w80/ma.png";
        setImgSRC1(imgSRC);
        break;
        case "Mozambique" : 
        imgSRC = "https://flagcdn.com/w80/mz.png";
        setImgSRC1(imgSRC);
        break;
        case "MS-Zaandam" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Myanmar" : 
        imgSRC = "https://flagcdn.com/w80/mm.png";
        setImgSRC1(imgSRC);
        break;
        case "Namibia" : 
        imgSRC = "https://flagcdn.com/w80/na.png";
        setImgSRC1(imgSRC);
        break;
        case "Nauru" : 
        imgSRC = "https://flagcdn.com/w80/nr.png";
        setImgSRC1(imgSRC);
        break;
        case "Nepal" : 
        imgSRC = "https://flagcdn.com/w80/np.png";
        setImgSRC1(imgSRC);
        break;
        case "Netherlands" : 
        imgSRC = "https://flagcdn.com/w80/nl.png";
        setImgSRC1(imgSRC);
        break;
        case "New-Caledonia" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "New-Zealand" : 
        imgSRC = "https://flagcdn.com/w80/nz.png";
        setImgSRC1(imgSRC);
        break;
        case "Nicaragua" : 
        imgSRC = "https://flagcdn.com/w80/ni.png";
        setImgSRC1(imgSRC);
        break;
        case "Niger" : 
        imgSRC = "https://flagcdn.com/w80/ne.png";
        setImgSRC1(imgSRC);
        break;
        case "Nigeria" : 
        imgSRC = "https://flagcdn.com/w80/ng.png";
        setImgSRC1(imgSRC);
        break;
        case "Niue" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "North-Macedonia" : 
        imgSRC = "https://flagcdn.com/w80/mk.png";
        setImgSRC1(imgSRC);
        break;
        case "Norway" : 
        imgSRC = "https://flagcdn.com/w80/no.png";
        setImgSRC1(imgSRC);
        break;
        case "Oman" : 
        imgSRC = "https://flagcdn.com/w80/om.png";
        setImgSRC1(imgSRC);
        break;
        case "Pakistan" : 
        imgSRC = "https://flagcdn.com/w80/pk.png";
        setImgSRC1(imgSRC);
        break;
        case "Palau" : 
        imgSRC = "https://flagcdn.com/w80/pw.png";
        setImgSRC1(imgSRC);
        break;
        case "Palestine" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Panama" : 
        imgSRC = "https://flagcdn.com/w80/pa.png";
        setImgSRC1(imgSRC);
        break;
        case "Papua-New-Guinea" : 
        imgSRC = "https://flagcdn.com/w80/pg.png";
        setImgSRC1(imgSRC);
        break;
        case "Paraguay" : 
        imgSRC = "https://flagcdn.com/w80/py.png";
        setImgSRC1(imgSRC);
        break;
        case "Peru" : 
        imgSRC = "https://flagcdn.com/w80/pe.png";
        setImgSRC1(imgSRC);
        break;
        case "Philippines" : 
        imgSRC = "https://flagcdn.com/w80/ph.png";
        setImgSRC1(imgSRC);
        break;
        case "Poland" : 
        imgSRC = "https://flagcdn.com/w80/pl.png";
        setImgSRC1(imgSRC);
        break;
        case "Portugal" : 
        imgSRC = "https://flagcdn.com/w80/pt.png";
        setImgSRC1(imgSRC);
        break;
        case "Qatar" : 
        imgSRC = "https://flagcdn.com/w80/qa.png";
        setImgSRC1(imgSRC);
        break;
        case "R&eacute;union" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Romania" : 
        imgSRC = "https://flagcdn.com/w80/ro.png";
        setImgSRC1(imgSRC);
        break;
        case "Russia" : 
        imgSRC = "https://flagcdn.com/w80/ru.png";
        setImgSRC1(imgSRC);
        break;
        case "Rwanda" : 
        imgSRC = "https://flagcdn.com/w80/rw.png";
        setImgSRC1(imgSRC);
        break;
        case "S-Korea" : 
        imgSRC = "https://flagcdn.com/w80/kr.png";
        setImgSRC1(imgSRC);
        break;
        case "Saint-Helena" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Saint-Kitts-and-Nevis" : 
        imgSRC = "https://flagcdn.com/w80/kn.png";
        setImgSRC1(imgSRC);
        break;
        case "Saint-Lucia" : 
        imgSRC = "https://flagcdn.com/w80/lc.png";
        setImgSRC1(imgSRC);
        break;
        case "Saint-martin" : 
        imgSRC = "https://flagcdn.com/w80/sm.png";
        setImgSRC1(imgSRC);
        break;
        case "Saint-Pierre-Miquelon" : 
        imgSRC = "https://flagcdn.com/w80/sm.png";
        setImgSRC1(imgSRC);
        break;
        case "Samoa" : 
        imgSRC = "https://flagcdn.com/w80/ws.png";
        setImgSRC1(imgSRC);
        break;
        case "San-Marino" : 
        imgSRC = "https://flagcdn.com/w80/sm.png";
        setImgSRC1(imgSRC);
        break;
        case "Sao-Tome-and-Principe" : 
        imgSRC = "https://flagcdn.com/w80/st.png";
        setImgSRC1(imgSRC);
        break;
        case "Saudi-Arabia" : 
        imgSRC = "https://flagcdn.com/w80/sa.png";
        setImgSRC1(imgSRC);
        break;
        case "Senegal" : 
        imgSRC = "https://flagcdn.com/w80/sn.png";
        setImgSRC1(imgSRC);
        break;
        case "Serbia" : 
        imgSRC = "https://flagcdn.com/w80/rs.png";
        setImgSRC1(imgSRC);
        break;
        case "Seychelles" : 
        imgSRC = "https://flagcdn.com/w80/sc.png";
        setImgSRC1(imgSRC);
        break;
        case "Sierra-Leone" : 
        imgSRC = "https://flagcdn.com/w80/sl.png";
        setImgSRC1(imgSRC);
        break;
        case "Singapore" : 
        imgSRC = "https://flagcdn.com/w80/sg.png";
        setImgSRC1(imgSRC);
        break;
        case "Sint-Martin" : 
        imgSRC = "https://flagcdn.com/w80/sm.png";
        setImgSRC1(imgSRC);
        break;
        case "Slovaquia" : 
        imgSRC = "https://flagcdn.com/w80/sk.png";
        setImgSRC1(imgSRC);
        break;
        case "Slovenia" : 
        imgSRC = "https://flagcdn.com/w80/sl.png";
        setImgSRC1(imgSRC);
        break;
        case "Solomon-Islands" : 
        imgSRC = "https://flagcdn.com/w80/sb.png";
        setImgSRC1(imgSRC);
        break;
        case "Somalia" : 
        imgSRC = "https://flagcdn.com/w80/so.png";
        setImgSRC1(imgSRC);
        break;
        case "South-Africa" : 
        imgSRC = "https://flagcdn.com/w80/za.png";
        setImgSRC1(imgSRC);
        break;
        case "South-Sudan" : 
        imgSRC = "https://flagcdn.com/w80/ss.png";
        setImgSRC1(imgSRC);
        break;
        case "Spain" : 
        imgSRC = "https://flagcdn.com/w80/es.png";
        setImgSRC1(imgSRC);
        break;
        case "Sri-Lanka" : 
        imgSRC = "https://flagcdn.com/w80/lk.png";
        setImgSRC1(imgSRC);
        break;
        case "St-Barth" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "St-Vincent-Grenadines" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Sudan" : 
        imgSRC = "https://flagcdn.com/w80/ss.png";
        setImgSRC1(imgSRC);
        break;
        case "Suriname" : 
        imgSRC = "https://flagcdn.com/w80/sr.png";
        setImgSRC1(imgSRC);
        break;
        case "Sweden" : 
        imgSRC = "https://flagcdn.com/w80/se.png";
        setImgSRC1(imgSRC);
        break;
        case "Switzerland" : 
        imgSRC = "https://flagcdn.com/w80/ch.png";
        setImgSRC1(imgSRC);
        break;
        case "Syria" : 
        imgSRC = "https://flagcdn.com/w80/sy.png";
        setImgSRC1(imgSRC);
        break;
        case "Taiwan" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Tajikistan" : 
        imgSRC = "https://flagcdn.com/w80/tj.png";
        setImgSRC1(imgSRC);
        break;
        case "Tanzania" : 
        imgSRC = "https://flagcdn.com/w80/tz.png";
        setImgSRC1(imgSRC);
        break;
        case "Thailand" : 
        imgSRC = "https://flagcdn.com/w80/th.png";
        setImgSRC1(imgSRC);
        break;
        case "Timor-Leste" : 
        imgSRC = "https://flagcdn.com/w80/tl.png";
        setImgSRC1(imgSRC);
        break;
        case "Togo" : 
        imgSRC = "https://flagcdn.com/w80/tg.png";
        setImgSRC1(imgSRC);
        break;
        case "Tokelau" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Tonga" : 
        imgSRC = "https://flagcdn.com/w80/to.png";
        setImgSRC1(imgSRC);
        break;
        case "Trinidad-and-Tabago" : 
        imgSRC = "https://flagcdn.com/w80/tt.png";
        setImgSRC1(imgSRC);
        break;
        case "Tunisia" : 
        imgSRC = "https://flagcdn.com/w80/tn.png";
        setImgSRC1(imgSRC);
        break;
        case "Turkey" : 
        imgSRC = "https://flagcdn.com/w80/tr.png";
        setImgSRC1(imgSRC);
        break;
        case "Turks-and-Caicos" : 
        imgSRC = "https://flagcdn.com/w80/tm.png";
        setImgSRC1(imgSRC);
        break;
        case "Tuvalu" : 
        imgSRC = "https://flagcdn.com/w80/tv.png";
        setImgSRC1(imgSRC);
        break;
        case "UAE" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Uganda" : 
        imgSRC = "https://flagcdn.com/w80/ug.png";
        setImgSRC1(imgSRC);
        break;
        case "UK" : 
        imgSRC = "https://flagcdn.com/w80/gb.png";
        setImgSRC1(imgSRC);
        break;
        case "Ukraine" : 
        imgSRC = "https://flagcdn.com/w80/ua.png";
        setImgSRC1(imgSRC);
        break;
        case "Uruguay" : 
        imgSRC = "https://flagcdn.com/w80/uy.png";
        setImgSRC1(imgSRC);
        break;
        case "USA" : 
        imgSRC = "https://flagcdn.com/w80/us.png";
        setImgSRC1(imgSRC);
        break;
        case "Uzbekistan" : 
        imgSRC = "https://flagcdn.com/w80/uz.png";
        setImgSRC1(imgSRC);
        break;
        case "Vanuatu" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Vatican-City" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Venezuela" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Vietnam" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Wallis-and-Futuna" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Western-Sahara" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Yemen" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Zambia" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;
        case "Zimbabwe" : 
        imgSRC = "https://flagcdn.com/w80/eu.png";
        setImgSRC1(imgSRC);
        break;

        
        
       }
   }
},[fetchData])

useEffect(()=>{
    fetchData();
},[selectedCountry])










const deletRaw = (currentIndex) =>{
  setRows(
    rows.filter((row,idx)=> idx !== currentIndex )
  )
}





const [casTableau,setCasTableau] = useState("");
const [popTableau,setPopTableau] = useState("");
const [mortsTableau,setMortsTableau] = useState("");
const [testsTableau,setTestsTableau] = useState("");
const [rows, setRows] = useState([{
  pays: "Ex : France",
  pop: "Nbr Pop",
  cas: "Nbr Cas",
  morts: "Nbr Morts",
}]);



const returnBtnImpr = ()=>{
  const tableLength = rows.length;
  if(tableLength > 1){
    return (
      <>
      <div className="pt-2 apparbtn flex justify-center">
      <button className="bg-white border-2 border-bleuc2 rounded shadow-md px-2 py-1">
        Imprimer le récapitulatif
      </button>
      </div>
      </>
    )
  }
}


const fetchDataTableau = async () => {
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/history",
    params: {
      country: `${selectedCountryTableau}`,
    },
    headers: {
      "X-RapidAPI-Key": "ddf7b2e79emsh303cb203d7a56bcp1a3350jsnf8621e2cb720",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };


  try {
    
    
    const response = await axios.request(options);
   

    const casTTTableau = response.data.response[0].cases.total;
    const popTableau = response.data.response[0].population;
    const deathsTTTableau = response.data.response[0].deaths.total;
    const guerisTTTableau = response.data.response[0].cases.recovered;
    const nbrTestsTableau = response.data.response[0].tests.total;
    const casVrmActiveTableau = response.data.response[0].cases.active;
    const casCriticalTableau = response.data.response[0].cases.critical;
    const recoveredTableau = response.data.response[0].cases.recovered;
    
    setPopTableau(popTableau);
    setCasTableau(casTTTableau);
    setMortsTableau(deathsTTTableau);
    setTestsTableau(nbrTestsTableau);
    
    setRows([

      ...rows,{
        pays: selectedCountryTableau,
        pop: popTableau,
        cas: casTTTableau,
        morts: deathsTTTableau,
        tests: nbrTestsTableau,
      }
    ]);

    
    
  } catch (error) {
    console.error(error);
    
  }
};
    




const returnBack = ()=>{
  if(selectedCountry !== ""){
    
    return (
      <>
      <div className="absolute right-0 top-0 p-4 apparbtn cursor-pointer" onClick={(e)=>{setSelectedCountry("")}}>
        <BsBoxArrowInLeft size={25} color={bleuc3}/>
      </div>
      </>
    )
  }else{
    
  }
}



const returnCard1InfoInit = () => {
    if(affChart && clickCas){
        return (
            <>
            <div className="flex flex-col justify-center items-center h-full w-full">
                        <h2 className="text-black text-lg font-bold">
                            {selectedPie} en {selectedCountry}
                        </h2>
                        <select
                value={selectedPie}
                onChange={handleChange}
                className="border-2 border-bleuc2 rounded-md p-[2px] "
              >
                <option value="Contagiosité">Contagiosité</option>
                <option value="Mortalité">Mortalité</option>
              </select>
            
                       

                        {selectedPie === "Contagiosité" ? (
              <div className="w-[40%]">
                <Pie data={data2} options={options2} />
              </div>
            ) : selectedPie === "Mortalité" ? (
              <div className="w-[40%]">
                <Pie data={data3} options={options3} />
              </div>
            ) : null}
                       
                    </div>
            </>
        )
    }
    
  };





































const canvasRef = useRef(null);
const divRef = useRef(null); // Référence à la div pour le rendu
const returnplanete = ()=>{
  const div = divRef.current; // La div pour le rendu
  const width = div.clientWidth;
  const height = div.clientHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 10); // Modifier la position de la caméra pour voir la planète

  const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true }); // Active la transparence du fond
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0); // Couleur de fond noire et totalement transparente

  const geometry = new THREE.SphereGeometry(4.75, 128, 128);
  const texture = new THREE.TextureLoader().load('/Images/map2.webp');
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const earth = new THREE.Mesh(geometry, material);
  scene.add(earth);

  function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.002;
    renderer.render(scene, camera);
  }

  animate();

  function handleResize() {
    const width = div.clientWidth; // Utiliser la largeur de la div
    const height = div.clientHeight; // Utiliser la hauteur de la div
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
  

}

useEffect(() => {
  returnplanete()
}, []);

const returnCanva = () => {

    return (
      <>
        <div ref={divRef} className="w-full h-full relative top-0 left-0">
          <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
        </div>
      </>
    );
};


useEffect(()=>{
returnCanva()
},[affChart])







const [earthIsClicked,setEarthIsClicked] = useState(true);
const clickingEarth = ()=>{
    setClickCas(false);
    setClickDeaths(false);
    setClickVaccins(false);
    setEarthIsClicked(!earthIsClicked);
}



const [clickCas,setClickCas]= useState(false);
const clickingCas= ()=>{
    setClickCas(!clickCas);
    console.log(clickCas);
    setClickDeaths(false);
    setClickVaccins(false);
    setEarthIsClicked(false);
}


const [clickDeaths,setClickDeaths]= useState(false);
const clickingDeaths= ()=>{
    setClickDeaths(!clickDeaths);
    console.log(clickDeaths);
    setClickVaccins(false);
    setEarthIsClicked(false);
    setClickCas(false);
}

const [clickVaccins,setClickVaccins]= useState(false);
const clickingVaccins= ()=>{
    setClickVaccins(!clickVaccins);
    console.log(clickVaccins);
    setEarthIsClicked(false);
    setClickCas(false);
    setClickDeaths(false);
}



const serie1 = [0.035, 0.013, 0.004, 0.007, 0.005, 0.018, 0.022, 0.005, 0.012, 0.008];
const serie2 = [0.41, 0.77, 0.79, 0.78, 0.87, 0.26, 0.08, 0.65, 0.67, 0.89];

const meanSerie1 = math.mean(serie1);
const meanSerie2 = math.mean(serie2);

const covariance = math.sum(serie1.map((x, i) => (x - meanSerie1) * (serie2[i] - meanSerie2))) / serie1.length;

const varianceSerie1 = math.variance(serie1);
const varianceSerie2 = math.variance(serie2);

const correlation = covariance / (Math.sqrt(varianceSerie1) * Math.sqrt(varianceSerie2));
const correlationWith3Decimals = correlation.toFixed(3);
useEffect(() => {
    console.log(meanSerie1)
    console.log(covariance);
    console.log(correlation);
}, []);








const dataScatterChart = {
    labels: ['Afhanistan', 'Argentine', 'France', 'Finland', 'Portugal', 'Angola', 'Senegal', 'Estonie', 'Inde', 'Cuba'],
    datasets: [{
        label: 'Pays',
        data: [
            { x: 0.035, y: 0.41 },
            { x: 0.013, y: 0.77 },
            { x: 0.004, y: 0.79 },
            { x: 0.007, y: 0.78 },
            { x: 0.005, y: 0.87 },
            { x: 0.018, y: 0.26 },
            { x: 0.022, y: 0.08 },
            { x: 0.005, y: 0.65 },
            { x: 0.012, y: 0.67 },
            { x: 0.008, y: 0.89 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
    }],
};

  
  // Options du Scatter Chart
  const optionsScatterChart = {
    plugins: {
        legend: {
            display: affLeg,
        },
    },
    responsive: true,
    scales: {
        xAxes: [{
            type: 'linear',
            position: 'bottom',
            scaleLabel: {
                display: true,
                labelString: 'Axe X',
            },
        }],
        yAxes: [{
            type: 'linear',
            position: 'left',
            scaleLabel: {
                display: true,
                labelString: 'Axe Y',
            },
            ticks: {
                suggestedMax: 1,
            },
        }],
    },
};








const [clickLegendeInfo,setClickLegendeInfo] = useState(false);

const clikingLegendInfo = () =>{
  setClickLegendeInfo(!clickLegendeInfo);
}





const [affInfo, setAffInfo] = useState(true);

useEffect(() => {
  const intervalId = setInterval(() => {
    setAffInfo((prevAffInfo) => !prevAffInfo);
  }, 7000);

  // Nettoyer l'intervalle lorsque le composant est démonté
  return () => clearInterval(intervalId);
}, []);





  return (
    <>
    
      <div className="sidegauche  z-999 flex justify-center items-center p-4">
        <div className="h-full w-full bg-white rounded-lg relative overflow-hidden vraisidegauche">

          <div className="h-[30%]">

          {returnBack()}
          <div className="flex justify-center " onClick={(e)=>{setSelectedCountry("")}}>

          <img src={imgCovid} alt="" className="w-[92px] h-[92px] mt-4 cursor-pointer logocov" />
          </div>
          
        <div className="flex justify-center p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-center">
              <p className="text-center font-bold text-lg">Obtenir les informations détaillées d'un pays :</p>
            <select
    value={selectedCountry}
    onChange={(e) => {
        setSelectedCountry(e.target.value);
    }}
    className="border-2 border-vertc1 rounded-md mt-2 p-2"
    >
    <option value="">Sélectionnez un pays</option>
    {allCountry.map((country, index) => (
        <option key={index} value={country}>
        {country}
        </option>
    ))}
    </select>
            </div>
          </div> 
        </div>

            </div>


            <div className="w-full h-[70%] flex flex-col items-end justify-end relative ">
            <img src={truc1} alt="" className="absolute z-0 top-0 left-0 w-16 h-16 virusicon" />
            <img src={truc2} alt="" className="absolute z-0 top-32 left-16 w-16 h-16 virusicon2" />
            <img src={truc4} alt="" className="absolute z-0 bottom-56 right-16 w-16 h-16 virusicon3" />
                <div className="w-full h-[50%] py-4 px-4">
                    <div className="w-full h-full  flex flex-col justify-end">
                        <div className="flex flex-col gap-2">
                        <button className="w-full h-[48px] bg-white rounded-md shadow-md  border-2 border-vertc1" onClick={fAffLeg}>
                            <span className="flex justify-between items-center px-4">
                              <p className="font-bold">Aff. légendes</p>
                              <AiOutlineLineChart size={25} color={vertc1}/>

                            </span>
                          </button>
                          
                          <button className="w-full h-[48px] bg-white rounded-md shadow-md  border-2 border-vertc1" onClick={handleMode}>
                            <span className="flex justify-between items-center px-4">

                              {mode === "light" ? <p className="font-bold">Darkmode</p> : <p className="font-bold">LightMode</p>}
                              {mode === "light" ? <BiSolidMoon size={25} color={vertc1} className="affmoonsun"/> : <BiSolidSun size={28} color={vertc1} className="affmoonsun"/>}
                              

                              

                            </span>
                          </button>




                        </div>
                        <div className="flex justify-center pt-4">
                          <div className="w-[90%] h-[2px] bg-gray-200">

                          </div>
                        </div>
                        <div className="pt-4">
                          

                        <button className="w-full h-[48px] bg-white rounded-md shadow-md  border-2 border-vertc2 b3" onClick={openModal}>
                            <span className="flex justify-between items-center px-4">
                              <p className="font-bold">Informations</p>
                              <BiInfoCircle size={25} color={mode === "light" ? vertc2 : vertc2} className="duration-300 ease-out" />

                            </span>
                          </button>


                          
                        </div>
                    </div>
                </div>
                    
            </div>

        </div>
      </div>













      <main className="main">
        <div className="dashboardintit flex justify-between ">
          <div className="p-8 ">
            <div className="w-36 h-10 bg-white rounded-full relative flex items-center dashboardColor">
              <div className="w-10 h-10 rounded-full flex justify-center items-center absolute border-2 border-[#F2F4F9] dashboardColor">
                
              <BsFillHouseDoorFill size={25} color={bleuc3} onClick={(e) => { setSelectedCountry("") }} className="cursor-pointer" />
                
              </div>
              <p className="ml-[48px] italic">Dashboard</p>
            </div>
          </div>
          
          {affChart && (
            <>
            <div className="flex items-center h-full">
            <img src={imgSRC1} alt="" className=" mr-8 mt-6 rounded border-2 border-white borderFlag " />
          </div>
            </>
          )}
          <div className="my-auto ">
            {affChart ? <p className="font-bold text-3xl text-bleuc3">{selectedCountry}</p> : <p className="font-bold text-3xl text-bleuc3 p-6">Monde</p>}
          </div>
         
        </div>









        <div className="maingrid px-8 py-6 shadow-xl">
          <div className="card shadow-lg flex overflow-hidden relative">
          <img src={truc1} alt="" className="absolute z-0 top-8 right-8 w-16 h-16 virusicon3" />

          

          <div className="absolute top-0 left-0 polygonerectangle ">
            <div className="flex">
                <div className="containerpath">
                  <div className="polygone">
                  {!affChart ? <p className="ml-[40px] text-sm font-bold">
                 Données Globales
                    </p> : <p className="ml-[40px] text-sm font-bold"> Données {selectedCountry} </p>}
                  </div>
                </div>
            </div>
         </div>

         <div className="card1 h-wull w-full relative  ">
         
            <div className="flex h-full w-full">
                
            
            <div className="iconegauche w-[13%] h-full ">
                    <div className="flex flex-col w-full h-full justify-center items-center gap-1 mt-4 ">
                        <div className="flex-col flex ">
                            <button
                            className={`flex h-16 w-16 border-2 ${affChart ? "border-vertc2" : "border-bleuc2"} justify-center items-center shadow rounded-lg bouttonearth ${earthIsClicked && !affChart ? 'bg-bleuc2' : (earthIsClicked && affChart) ? 'bg-vertc2' : ''} ease-in-out duration-200`}

                            onClick={clickingEarth}
                            >
                                <FaEarthAfrica size={35} color={bleuc3} />                    
                            </button>
                            <span className="text-center text-[11px] text-black font-bold"> {affChart ? "Pays"  : "Monde" }</span>
                        </div>

                        <div className="flex-col flex ">
                        <button className={`flex h-16 w-16 border-2 ${affChart ? "border-vertc2" : "border-bleuc2"} justify-center items-center shadow rounded-lg bouttonearth ${clickCas ? 'bg-bleuc2' : ''} ${clickCas && affChart ? 'bg-vertc2' : ''} ease-in-out duration-200`} onClick={clickingCas}>
                        {affChart ? <img  src={gravevirus} alt="Grave" className="p-1"/>  : <BiSolidVirus color={bleuc3} size={40}/> }
                            </button>
                            <span className="text-center text-[11px] text-black font-bold">{affChart ? "Léta+Cont" : "Contagiosité" }</span>
                        </div>

                        <div className="flex-col flex ">
                            <button className={`flex h-16 w-16 border-2 ${affChart ? "border-vertc2" : "border-bleuc2"} justify-center items-center shadow rounded-lg bouttonearth ${clickDeaths ? 'bg-bleuc2' : ''} ${clickDeaths && affChart ? 'bg-vertc2' : ''} ease-in-out duration-200`} onClick={clickingDeaths}>
                            {affChart ? <img src={radarimg} alt="" className="p-1"/> : <BiGitCompare size={40}  color={bleuc3}/> }
                            </button>
                            <span className="text-center text-[11px] text-black font-bold">{!affChart ? "Corrélation" : "Guérris +"}</span>
                        </div>

                        <div className="flex-col flex ">
                            <button className={`flex h-16 w-16 border-2 ${affChart ? "border-vertc2" : "border-bleuc2"} justify-center items-center shadow rounded-lg bouttonearth ${clickVaccins ? 'bg-bleuc2' : ''} ${clickVaccins && affChart ? 'bg-vertc2' : ''} ease-in-out duration-200`} onClick={clickingVaccins}>
                                {affChart ? <PiTestTubeFill size={40}  color={bleuc3}/> : <TbVaccine size={40}  color={bleuc3}/> }                    
                            </button>
                            <span className="text-center text-[11px] text-black font-bold">{!affChart ? "Vaccins" : "Tests"}</span>
                        </div>

                    </div>
            </div>

            <div className="partiedroite w-[87%] h-full relative">
            
            {affChart && clickVaccins && (
                    <>
                            
                               
                            <div className="flex flex-col justify-center items-center h-full w-full">
                        <h2 className="text-black text-lg font-bold">
                            Comparaison Nombre de Test avec :
                        </h2>
                        <select
                    value={selectedCountry2}
                    onChange={(e) => setSelectedCountry2(e.target.value)}
                    className="select2 border-2 border-bleuc2 p-1 rounded-lg"
                    >
                    <option value="">Selectionner un pays</option>
                    {allCountry.map((country, index) => (
                        <option key={index} value={country}>
                        {country}
                        </option>
                    ))}
                </select>
                        <div className="w-[90%]">
                        <Bubble data={dataBubble} options={optionsBubble}/>
                      </div>  
                    </div>
                                
                            
                    </>
                )} 

            {affChart && clickDeaths && (
                    <>
                            
                               
                            <div className="flex flex-col justify-center items-center h-full w-full">
                        <h2 className="text-black text-lg font-bold">
                            Taux de rétablissement / Morts / Cas
                        </h2>
                        <div className="w-[45%]">
                        <Radar data={dataRadar} options={optionsRadar} />
                      </div>  
                    </div>
                                
                            
                    </>
                )} 
            
            {affChart && clickCas && (
                    <>
                            
                               
                                {returnCard1InfoInit()}
                                
                            
                    </>
                )} 

            {affChart && earthIsClicked && (
                    <>
                            
                                <div className="flex justify-center items-center h-full w-full">
                                <p className="text-[3em] text-vertc2 infosRapide"> {selectedCountry} </p> 
                                </div>
                            
                    </>
                )} 

                {affChart && earthIsClicked && (
                    <>
                            
                                <div className="flex justify-center items-center h-full w-full">
                                <p className="text-[3em] text-vertc2 infosRapide"> {selectedCountry} </p> 
                                </div>
                            
                    </>
                )} 



                {!affChart && clickCas && (
                    <>
                    <div className="flex flex-col justify-center items-center h-full w-full">
                        <h2 className="text-black text-lg font-bold">
                            Contagiosité dans le monde
                        </h2>
                        <div className="w-[50%]">
                    <Pie data={dataPasAffChart1} options={optionsPasAffChart1} className=""/> 
                      </div>  
                    </div>
                    </>
                )}
                {!affChart && clickDeaths && (
                    <>
                    <div className="flex flex-col justify-center items-center h-full w-full">
                        <button className="absolute top-0 right-0 py-2 px-4 font-bold border-2 border-vertc2 mx-4 my-2 rounded-lg shadow-md hover:bg-gray-50" onClick={clsRouge}>En savoir +</button>
                    <h2 className="text-black text-lg font-bold">
                            Taux de corrélation : {correlationWith3Decimals}
                        </h2>
                        <div className="w-[70%]">
                     <Scatter data={dataScatterChart} option={optionsScatterChart}/> 
                      </div>  
                    </div>
                    </>
                )}
                {!affChart && clickVaccins && (
                    <>
                    <div className="flex flex-col justify-center items-center h-full w-full">
                    <h2 className="text-black text-lg font-bold">
                            Vaccins dans le monde
                        </h2>
                        <div className="w-[50%]">
                    <PolarArea data={polarAreadata} options={polarAreaoptions}/>
                      </div>  
                    </div>
                    </>
                )}         
            {affPlanetee && (
            <>
                {returnCanva()}          
                
            </>
            )}
            {earthIsClicked && !affChart && (
                <>
                <p className="absolute bottom-0 right-0 p-2 text-black text-lg font-bold">
                Cas Covid Monde : {casTTMonde}
                </p>
                </>
            )}



            











            </div>

            </div>
        </div>




          </div>







          








          <div className="card shadow-lg overflow-hidden relative">
          {!affChart && affInfo && (
           
              <>
              <div className="w-[100%] h-[100%] absolute flex justify-center flex-col items-start bg-white continfo ">
            <img src={infographiesanslegende} alt="" className="w-[80%] h-[80%] mx-auto " />
            <div className="flex mx-auto mt-2">
              <a download href={infographie} className="flex gap-2 justify-center items-center bg-white rounded hover:bg-gray-100 ease-in-out duration-150 border-2 border-vertc1 py-1 px-2">
                  <p  download className="font-bold">
                    Télécharger
                  </p>
                  <span>
                    <IoMdDownload color={vertc1}/>
                  </span>
              </a>
              
            </div>
          </div>
              </>
            
          )}
          <div className="absolute top-0 left-0 polygonerectangle ">
            <div className="flex">
                <div className="containerpath">
                  <div className="polygone">
                  {!affChart ? <p className="ml-[40px] text-sm font-bold">
                  Nombre de Cas par Continents
                    </p> : <p className="ml-[40px] text-sm font-bold"> Nombre de Cas par Continents </p>}
                  </div>
                </div>
            </div>
         </div>
                    {returnCard3Infos()}
                    {!affChart && !affInfo && (
            <>
           <div className="flex w-full h-full justify-center items-center ">
           
                        <div className="w-[80%] continfo">
                          <Doughnut data={dataDoughnut2} options={optionsDoughnut2}/>
                        </div>
                        
                    </div>
           
            </>
            
            )}
             
                    
                    
          </div>





         




          <div className="card cardBar shadow-lg overflow-hidden relative">
          <img src={truc5} alt="" className="absolute z-0 top-16 left-16 w-16 h-16 virusicon" />
          <img src={truc6} alt="" className="absolute z-0 bottom-16 right-16 w-16 h-16 virusicon2" />
          <div className="absolute top-0 left-0 polygonerectangle ">
            <div className="flex">
                <div className="containerpath2">
                  <div className="polygone2">
                  {!affChart ? <p className="ml-[60px] text-sm font-bold">
                  Mon Tableau Comparatif Rapide
                    </p> : <p className="ml-[60px] text-sm font-bold"> Nouveaux Cas Covid des 10 Derniers Jours en {selectedCountry} </p>}
                  </div>
                </div>
            </div>
         </div>

          
          {returnBarData()}
          {!affChart && (
            <>
           <div className="w-full pt-3" >
            <h1 className="text-center font-bold text-lg text-bleuf1" >Mon Tableau Comparatif Rapide</h1>
           </div>
           <div className="w-full h-full flex flex-col">
            
              <h2 className="text-center">
                Choisissez les pays que vous voulez ajouter au tableau
              </h2>
              <div>
            <div className="flex justify-center pt-2 gap-4">
              <select
                  value={selectedCountryTableau}
                  onChange={(e) => {
                      setSelectedCountryTableau(e.target.value);
                  }}
                  className="border-2 border-bleuc2 rounded-lg p-2 selectdark"
                  >
                  <option value="">Sélectionnez un pays</option>
                  {allCountry.map((country, index) => (
                      <option key={index} value={country}>
                      {country}
                      </option>
                  ))}
              </select>
              <div className="bg-white border-2 border-bleuc2 rounded shadow-md p-1 text-lg cursor-pointer flex justify-center items-center selectdark" onClick={fetchDataTableau}>
                    
                      <IoAdd size={20} color={mode === "light" ? "gray" : "white"} />
                    
              </div>
              </div>
              </div>

        
          
              <div className="table-wrapper w-full pt-4">
                  <table className="table">
                    <thead>
                      <tr> 
                        <th className="expand">
                          Pays
                        </th>
                        <th>
                          Population
                        </th>
                        <th>
                          Nbr Cas
                        </th>
                        <th>
                          Nbr Morts
                        </th>
                        <th>
                        Taux de Mortalité
                        </th>
                        <th>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, idx) => (
                        <tr key={idx} className="apprligne">
                          <td className="expand">
                            {row.pays}
                          </td>
                          <td className="text-center">
                            {row.pop}
                          </td>
                          <td className="text-center">
                            {row.cas}
                          </td>
                          <td className="text-center">
                            {row.morts}
                          </td>
                          <td className="text-center text-bleuc3">
                            {(row.morts / row.cas).toFixed(3)}
                          </td>
                          <td>
                            <span className="actions">
                              <BsFillTrashFill onClick={() => deletRaw(idx)} />
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

            {returnBtnImpr()}
           
           </div>
           
           
            </>
            
            )}
    


          </div>
        </div>
        <ToastContainer />
      </main>










      <div className="sidedroite">
      
          <div className="w-full h-full p-4 flex justify-center items-center relative ">
          <img src={truc1} alt="" className="absolute z-0 bottom-8 right-32 w-16 h-16 virusicon2" />

            <div className={`absolute w-full h-full z-999 legendeinfo ${(affInfo && !affChart) && "legendendeinfoclick"} flex justify-center`}>
                  <img src={infographielegende} alt="" className={`h-[90%] p-8 imginfoo`} />
            </div>
            <div className="h-full w-full flex flex-col bg-white rounded-lg vraisidedroite  p-8  ">
            
            <h1 className={`text-center text-black font-bold text-xl ${ajoutClasseRouge ? "text-red-500 scale-150 " : "text-black"} ease duration-200 `}>Informations</h1>
            <div className="mt-2 w-full h-[2px] flex justify-center items-center">
                <div className="h-[2px] w-[70%] bg-bleuf1">

                </div>
            </div>
            <div className="flex flex-col mt-4 gap-3">



            {affChart &&  (
                <>
                <div className="flex flex-col gap-6">
                    <p className="text-center font-bold">Données essentielles sur {selectedCountry}</p>
                    <div className="p1">
                      <p className="text-justify text-md ">Nombre total de cas</p>                      
                      <p className="text-end text-vertc1 font-bold">{casActive}</p>
                    </div>
                    <div className="p2">
                      <p className="text-justify text-md">Nombre total de morts</p>                      
                      <p className="text-end text-vertc1 font-bold">{deathsTT}</p>
                    </div>
                    <div className="p3">
                      <p className="text-justify text-md">Nombre total de rétablissements</p>                      
                      <p className="text-end text-vertc1 font-bold">{guerisTT}</p>
                    </div>
                    <div className="p4">
                      <p className="text-justify text-md ">Nombre total de tests</p>                      
                      <p className="text-end text-vertc1 font-bold">{nbrTestss}</p>
                    </div>
                    <div className="p5">
                      <p className="text-justify text-md">Nombre total de cas actifs</p>                      
                      <p className="text-end text-vertc1 font-bold">{CasVrmActive}</p>
                    </div>

                    <h2 className="p6 text-center font-bold">
                      Données additionnelles
                    </h2>
                    <div className="p7">
                      <p className="text-justify text-md">Population</p>                      
                      <p className="text-end text-vertc1 font-bold">{pop}</p>
                    </div>
                    <div className="p8">
                    <p className="text-md text-center text-sm italic">Depuis le début de la pandémie</p>
                    <p className="text-md text-center text-sm italic">16 / 11 / 19</p>

                    </div>
                   
                </div>
                </>
            )}


            {!affChart && clickDeaths &&  !affInfo &&(
                <>
                <div>
                    <p className={`text-center font-bold txtnoirtor ${ajoutClasseRouge ? "text-red-500 scale-150 " : "text-black"} ease duration-200`}> {correlationWith3Decimals}</p>
                    <p className="text-black text-justify p3">L'axe des Y représente le taux de vaccinés d'un pays et l'axe des X représente le taux de mortalité de ce même pays. L'objectif de ce graphique est de comprendre si il y a corrélation entre le fait d'être vacciné et le fait de mourrir. Cela permet de comprendre si le vaccin est efficace.</p>
                    <p className="text-center mt-2 p4">Pour l'obtenir on calcul :</p>
                    <p className="text-center p5">La moyenne de la série 1 : <span className="italic text-vertc1"> {meanSerie1}</span></p>
                    <p className="text-center p6">La moyenne de la série 2 : <span className="italic text-vertc1"> {meanSerie2}</span></p>
                    <p className="text-center p7">les variances respectives des deux séries soit :</p>               
                    <p className="text-center italic p8">V1: <span className="text-vertc1"> {varianceSerie1}</span></p>
                    <p className="text-center italic p9">V2: <span className="text-vertc1">{varianceSerie2}</span> </p>                
                    <p className="text-center p10">Ensuite on s'attaque à la covariance :</p>
                    <p className="text-center text-vertc1 p11">{covariance}</p>
                    <p className="text-center p12"> Pour finir avec le taux de corrélation :</p>
                    <p className="text-center text-bleuf1 font-bold p13">{correlation}</p>
                    <p className="text-center p14">On en déduit qu'il n'y a pas forcément de corrélation entre le fait de se faire vacciner et le taux de mortalité d'un pays. </p>
                </div>
                </>
            )}


            {!affChart && (earthIsClicked || clickVaccins || clickCas) && !affInfo && (
                <>
                <div>
                <p className="text-justify text-md p1">Nombre total de cas covid dans le monde 
                </p>
                <p className="text-end text-vertc1 font-bold p2">{casTTMonde}</p>
                </div>
                <div>
                <p className="text-justify text-md p3">Nombre de cas actifs total en <span className="text-bleuf1">Europe</span>
                </p>
                <p className="text-end font-bold text-bleuf1 p4">{casActiveEurope}</p>
                </div>
                <div>
                <p className="text-justify text-md p5">Nombre de cas actifs total en <span className="text-bleuc2">Afrique</span>
                </p>
                <p className="text-end text-bleuc2 font-bold p6">{casActiveAfrica}</p>
                </div>
                <div>
                <p className="text-justify text-md p7">Nombre de cas actifs total en <span className="text-bleuc3">Océanie</span>
                </p>
                <p className="text-end text-bleuc3 font-bold p8">{casActiveOceania}</p>
                </div>
                <div>
                <p className="text-justify text-md p9">Nombre de cas actifs total en <span className="text-vertc1">Asie</span>
                </p>
                <p className="text-end text-vertc1 font-bold p10">{casActiveAsia}</p>
                </div>
                <div>
                <p className="text-justify text-md p11">Nombre de cas actifs total en <span className="text-vertc2">Amérique</span>
                </p>
                <p className="text-end text-vertc2 font-bold p12">{casActiveAmerica}</p>
                </div>
                <div className="mt-4 ">
                <p className="text-justify text-md p13">Nombre de cas total 
                </p>
                <p className="text-end text-vertc2 font-bold p14">770 000 000</p>
                </div>
                
                <div className="p15">
                    <p className="text-md text-center text-sm italic">Depuis le début de la pandémie</p>
                    <p className="text-md text-center text-sm italic">16 / 11 / 19</p>

                    </div>
                
                
                
                </>
            )}
            </div>
            

            </div>
          </div>
          
      </div>
      {returnLoading()}
      </>
  );
}

export default Mainlayout2;
