const data = [
  {
    id: 1,
    level: 3,
    name: "Ohniva koule",
    dmg: "8k6",
    range: "30s",
    time: "ihned",
    action: "akce",
    save: "obratnost",
    focus: false,
    info: "Přes tvora dle tvé volby, kterého vidíš v dosahu, se přežene vlna nekromantické energie a vysaje z jeho těla vláhu a vitalitu. <span className='kuk'> Cíl si musí hodit záchranný hod na Odolnost.</span> Když neuspěje, utrpí **nekrotické zranění 8k8** , nebo poloviční zranění při úspěšném záchranném hodu. Toto kouzlo nijak **nepůsobí na nemrtvé ani výtvory**.\n\nZacílíš-li rostlinového tvora nebo magickou rostlinu, má k záchrannému hodu nevýhodu a kouzlo mu způsobí maximální zranění.Zacílíš-li nemagickou rostlinu, která není tvor, například obyčejný strom nebo keř, tak si nehází záchranný hod; jednoduše uvadne a uhyne.\n\n Na vyšších úrovních. Sešleš-li toto kouzlo použitím pozice kouzla 5. či vyšší úrovně, za každou další úroveň pozice nad 4. se zvýší zranění o 1k8.",
  },
  {
    id: 2,
    level: 2,
    name: "Spatři neviditelného",
    dmg: "--",
    range: "Ty",
    time: "až 1h",
    action: "akce",
    save: "obratnost",
    focus: true,
    info: 
      "Přes tvora dle tvé volby, kterého vidíš v dosahu, se přežene vlna nekromantické energie a vysaje z jeho těla vláhu a vitalitu. <span className='kuk'> Cíl si musí hodit záchranný hod na Odolnost.</span> Když neuspěje, utrpí **nekrotické zranění 8k8** , nebo poloviční zranění při úspěšném záchranném hodu. Toto kouzlo nijak **nepůsobí na nemrtvé ani výtvory**.\n\nZacílíš-li rostlinového tvora nebo magickou rostlinu, má k záchrannému hodu nevýhodu a kouzlo mu způsobí maximální zranění.Zacílíš-li nemagickou rostlinu, která není tvor, například obyčejný strom nebo keř, tak si nehází záchranný hod; jednoduše uvadne a uhyne.\n\n Na vyšších úrovních. Sešleš-li toto kouzlo použitím pozice kouzla 5. či vyšší úrovně, za každou další úroveň pozice nad 4. se zvýší zranění o 1k8.",
    
  },
  {
    id: 3,
    level: 4,
    name: "kejkle",
    dmg: "8k8",
    range: "6s",
    time: "ihned",
    action: "akce",
    save: "obratnost",
    focus: false,
    info: 
      "Přes tvora dle tvé volby, kterého vidíš v dosahu, se přežene vlna nekromantické energie a vysaje z jeho těla vláhu a vitalitu. <span className='kuk'> Cíl si musí hodit záchranný hod na Odolnost.</span> Když neuspěje, utrpí **nekrotické zranění 8k8** , nebo poloviční zranění při úspěšném záchranném hodu. Toto kouzlo nijak **nepůsobí na nemrtvé ani výtvory**.\n\nZacílíš-li rostlinového tvora nebo magickou rostlinu, má k záchrannému hodu nevýhodu a kouzlo mu způsobí maximální zranění.Zacílíš-li nemagickou rostlinu, která není tvor, například obyčejný strom nebo keř, tak si nehází záchranný hod; jednoduše uvadne a uhyne.\n\n Na vyšších úrovních. Sešleš-li toto kouzlo použitím pozice kouzla 5. či vyšší úrovně, za každou další úroveň pozice nad 4. se zvýší zranění o 1k8.",
  
  },
  {
    id: 4,
    level: 4,
    name: "Hniloba",
    dmg: "8k8",
    range: "6s",
    time: "ihned",
    action: "bonus",
    save: "sila",
    focus: false,
    info: 
      "Přes tvora dle tvé volby, kterého vidíš v dosahu, se přežene vlna nekromantické energie a vysaje z jeho těla vláhu a vitalitu. <span className='kuk'> Cíl si musí hodit záchranný hod na Odolnost.</span> Když neuspěje, utrpí **nekrotické zranění 8k8** , nebo poloviční zranění při úspěšném záchranném hodu. Toto kouzlo nijak **nepůsobí na nemrtvé ani výtvory**.\n\nZacílíš-li rostlinového tvora nebo magickou rostlinu, má k záchrannému hodu nevýhodu a kouzlo mu způsobí maximální zranění.Zacílíš-li nemagickou rostlinu, která není tvor, například obyčejný strom nebo keř, tak si nehází záchranný hod; jednoduše uvadne a uhyne.\n\n Na vyšších úrovních. Sešleš-li toto kouzlo použitím pozice kouzla 5. či vyšší úrovně, za každou další úroveň pozice nad 4. se zvýší zranění o 1k8.",
    
  },
  {
    id: 5,
    level: 4,
    name: "Lada",
    dmg: "2k4",
    range: "6s",
    time: "ihned",
    action: "bonus",
    save: "odolnost",
    focus: false,
    info: 
      "Přes tvora dle tvé volby, kterého vidíš v dosahu, se přežene vlna nekromantické energie a vysaje z jeho těla vláhu a vitalitu. <span className='kuk'> Cíl si musí hodit záchranný hod na Odolnost.</span> Když neuspěje, utrpí **nekrotické zranění 8k8** , nebo poloviční zranění při úspěšném záchranném hodu. Toto kouzlo nijak **nepůsobí na nemrtvé ani výtvory**.\n\nZacílíš-li rostlinového tvora nebo magickou rostlinu, má k záchrannému hodu nevýhodu a kouzlo mu způsobí maximální zranění.Zacílíš-li nemagickou rostlinu, která není tvor, například obyčejný strom nebo keř, tak si nehází záchranný hod; jednoduše uvadne a uhyne.\n\n Na vyšších úrovních. Sešleš-li toto kouzlo použitím pozice kouzla 5. či vyšší úrovně, za každou další úroveň pozice nad 4. se zvýší zranění o 1k8.",
    
  },
  {
    id: 6,
    level: 4,
    name: "poryv vetru",
    dmg: "3k8",
    range: "6s",
    time: "ihned",
    action: "akce",
    save: "obratnost",
    focus: false,
    info: 
      "Přes tvora dle tvé volby, kterého vidíš v dosahu, se přežene vlna nekromantické energie a vysaje z jeho těla vláhu a vitalitu. <span className='kuk'> Cíl si musí hodit záchranný hod na Odolnost.</span> Když neuspěje, utrpí **nekrotické zranění 8k8** , nebo poloviční zranění při úspěšném záchranném hodu. Toto kouzlo nijak **nepůsobí na nemrtvé ani výtvory**.\n\nZacílíš-li rostlinového tvora nebo magickou rostlinu, má k záchrannému hodu nevýhodu a kouzlo mu způsobí maximální zranění.Zacílíš-li nemagickou rostlinu, která není tvor, například obyčejný strom nebo keř, tak si nehází záchranný hod; jednoduše uvadne a uhyne.\n\n Na vyšších úrovních. Sešleš-li toto kouzlo použitím pozice kouzla 5. či vyšší úrovně, za každou další úroveň pozice nad 4. se zvýší zranění o 1k8.",
    
  },
];

export default data;
