'use strict';

var R6MapsLangTermsJapanese = (function(R6MapsLangTerms, undefined) {
  var name = 'ja',
    terms = {
      general: {
        pageTitle: '',
        pageTitleSelectMap: 'R6Maps.com - マップを選択',
        pageTitleStart: '',
        cameraViewCaption: '{floorName} カメラ視点',
        shortcutTip: 'ショットカット: {shortcut}',
        menu: 'メニュー',
        about: 'R6Mapsについて',
        languageHeader: '言語',
        optionsHeader: '設定',
        labelLosOpacity: 'カメラ視界の透明さ',
        labelPercent: '{int}%',
        labelLosDefault: '(Default)',
        labelLos105: '(あれ?)',
        labelLos110: '(そんなばかな！）',
        labelRoomLabelStyle: '部屋名の文字スタイル',
        labelNumberFloorsToDisplay: '階の数を選択',
        lockPanning: 'パンニング解除',
        lockZooming: 'ズーミング解除',
        fullScreen: '全画面',
        enableScreenshots: 'スクリーンショット許可',
        contributions: '寄付',
        supportSiteNote: 'このサイトをサポートしたい方には寄付ボタンをクリックしてください'
      },
      roomLabelStyles: {
        Dark: '暗い',
        Light: '明るい(標準)',
        DarkAndLarge: '大きく暗い',
        LightAndLarge: '大きく明るい',
        DarkAndSmall: '小さく暗い',
        LightAndSmall: '小型軽量',
        DisplayNone: 'オフ'
      },
      floorDisplayOptions: {
        one: 'フル',
        two: '分割',
        four: 'グリッド'
      },
      selectMaps: {
        selectAMap: 'マップを選択',
        homeLink: 'マップを選択'
      },
      compass: {
        letterN: '北',
        letterE: '東',
        letterS: '南',
        letterW: '西'
      },
      floorNames: {
        basement: { full: '地下', short: 'B' },
        firstFloor: { full: '1階', short: '1' },
        secondFloor: { full: '2階', short: '2' },
        thirdFloor: { full: '3階', short: '3' },
        fourthFloor: { full: '4階', short: '4' },
        roof: { full: '屋上', short: 'R' }
      },
      objectives: {
        bombShortA: 'A',
        bombShortB: 'B',
        bomb: '爆弾',
        hostageShort: 'H',
        hostage: '人質',
        secureShort: 'S',
        secure: '確保',
        showAll: '全て見る'
      },
      legend: {
        breakableWalls: '破壊できる壁',
        breakableFloorTraps: '床の落とし戸',
        ceilingHatches: '天井の落とし戸',
        lineOfSightWalls: '視界の壁',
        lineOfSightFloors: '視界の床',
        droneTunnels: 'ドローンのトンネル',
        objectives: '目標',
        insertionPoints: '出現地点',
        securityCameras: '監視カメラ',
        skylights: '天窓',
        onFloorAboveOrBelow: '上か下の階にある',
        cameraLineOfSight: 'カメラの視界',
        ladders: 'はしご'
      },
      mapNames: {
        bank: '銀行',
        bartlett: 'バートレット大学',
        border: '国境',
        chalet: '山荘',
        club: 'クラブハウス',
        coastline: '海岸線',
        consulate: '領事館',
        favela: 'ファべーラ',
        hereford: 'ヘレフォード基地',
        house: '民家',
        kanal: '運河',
        kafe: 'カフェ・ドストエフスキー',
        oregon: 'オレゴン',
        plane: '大統領専用機',
        skyscraper: '高層ビル',
        yacht: 'ヨット'
      },
      mapRooms: {
        bank: {
          spawnBoulevard: '大通り',
          spawnBackAlley: '裏路地',
          printerRoom: 'コピー室',
          parkingLot: '駐車場',
          boulevard: '大通り',
          jewelryFront: '宝石店前',
          plaza: '広場',
          mainEntrance: '正面玄関',
          garageRamp: 'ガレージ<br/>スロープ',
          exteriorParking: '駐車場',
          garageRoof: 'ガレージ屋上',
          alleyAccess: '裏路地入口',
          backAlleyRooftop: '裏路地屋根',
          backAlley: '裏路地',
          highRoof: '銀行屋上 (上)',
          lowRoof: '銀行屋上 (下)',
          vault: '金庫',
          goldVault: '金保管室',
          serverRoomStairs: 'サーバールーム階段',
          serverRoom: 'サーバールーム',
          CCTVRoom: '監視室',
          loadingDock: '搬出口',
          secureHallway: '保管室廊下',
          sewer: '下水道',
          lockers: 'ロッカー',
          vaultLobby: '金庫前ロビー',
          vaultEntrance: '金庫入口',
          mainStairway: 'メイン階段',
          bankGarage: '銀行ガレージ',
          elevators: 'エレベーター',
          tellersOffice: '窓口オフィス',
          archives: '資料室',
          tellers: '窓口',
          loanOffice: 'ローンオフィス',
          officeHallway: 'オフィス廊下',
          skylightStairwell: '吹き抜け階段',
          lobby: 'ロビー',
          openArea: '空き部屋',
          staffRoom: 'スタッフルーム',
          electricalRoom: '電子機器室',
          adminOffice: '管理事務室',
          ATMs: 'ATMs',
          executiveHallway: 'VIP専用通路',
          frontDesk: '受付',
          executiveLounge: 'VIPラウンジ',
          CEOOffice: 'CEOオフィス',
          janitorCloset: '用務室',
          hallway: '廊下',
          terrace: 'テラス',
          stockTradingRoom: '証券取引ルーム',
          conferenceRoom: '会議室'
        },
        bartlett: {
          archwayHall: 'アーチホール',
          archwaylHallway: '',
          backAlley: '裏路地',
          bathroom: 'トイレ',
          campusField: '校庭',
          classroom: '教室',
          coatRoom: 'クローク<br/>ルーム',
          compassHallway: '羅針盤エリア',
          courtyard: '中庭',
          centralHallway: '中央廊下',
          diningRoom: 'ダイニングルーム',
          eastBalcony: '東バルコニー<br/>(表示されてない)',
          eastCorridor: '東通路',
          eastStairs: '東階段',
          festival: 'フェスティバル会場',
          frontEntrance: '正面入口',
          frontOffice: 'フロントオフィス',
          frontPatio: '正面パティオ',
          gardenPass: '脇道',
          kitchen: 'キッチン',
          lobby: 'ロビー',
          lounge: 'ラウンジ',
          lowerLibrary: '図書室1階',
          mainGate: 'メインゲート',
          mainOffice: 'メインオフィス',
          modelHall: 'モデルホール',
          pantry: '食料庫',
          parking: '駐車場',
          pianoRoom: 'ピアノルーム',
          readingRoom: '読書室',
          roof: '屋上',
          rowingMuseum: 'ボート展示室',
          serviceRoom: 'サービス<br/>ルーム',
          terrace: 'テラス',
          trophyRoom: '記念品室',
          upperLibrary: '図書室2階',
          vistaHallway: '吹き抜け<br/>の廊下',
          westBalcony: '西バルコニー<br/>(表示されてない)',
          westCorridor: '西通路'
        },
        border: {
          armoryLockers: '武器庫<br/>ロッカー',
          tellers: '窓口',
          ventilationRoom: '換気室',
          exitHallway: '出口廊下',
          supplyCorridor: '備品通路',
          detention: '留置所',
          customsInspection: '税関検査',
          customsDesk: '税関<br/>デスク',
          centralStairs: '中央階段',
          serverRoom: 'サーバールーム',
          supplyRoom: '備品室',
          workshop: '作業室',
          mainLobby: 'メインロビー',
          bathroom: 'トイレ',
          waitingRoom: '待合室',
          eastStairs: '東階段',
          passportCheck: 'パスポート<br/>チェック',
          archives: '資料室',
          offices: 'オフィス',
          officesHallway: 'オフィス廊下',
          fountain: '噴水',
          mainHallway: 'メイン<br/>廊下',
          armoryDesk: '武器庫<br/>デスク',
          securityRoom: 'セキュリティ<br/>ルーム',
          breakRoom: '休憩室',
          spawnEastVehicleEntrance: '東側車両入口',
          spawnValley: '流域',
          spawnWestVehicleExit: '西側車両出口',
          westTower: '西側タワー',
          pedestrianExit: '歩行者用出口',
          valley: '流域',
          parkingLotEntrance: '駐車場入口',
          parkingLot: '駐車場',
          westRoad: '西側道路',
          vehicleCustoms: '車両用税関',
          crashScene: '衝突現場',
          eastRoad: '東側道路',
          pedestrianEntrance: '歩行者用<br/>入口',
          pedestrianCustoms: '歩行者用税関',
          watchTower: '監視タワー',
          eastAlley: '東側路地',
          parkingLotAlley: '駐車場路地',
          northBalcony: '北側バルコニー',
          eastBalcony: '東側<br/>バルコニー',
          westBalcony: '西側<br/>バルコニー',
          southBalcony: '南側バルコニー',
          roof: '屋上'
        },
        chalet: {
          spawnFrontYard: 'フロントヤード',
          spawnCampfire: 'キャンプファイア',
          spawnCliffside: '崖際',
          spawnLakeside: 'レイクサイド',
          libraryStairs: '図書室階段',
          snowmobileGarageCorridor: 'スノーモービル<br/>ガレージ<br/>前通路',
          snowmobileGarage: 'スノーモービル<br/>ガレージ',
          greatRoomStairs: 'リビング階段',
          storageRoom: '貯蔵室',
          wineCellar: 'ワイン<br/>セラー',
          wineStock: 'ワイン<br/>貯蔵室',
          basementHallway: '地下通路',
          backyardStairs: 'バックヤード<br/>階段',
          mainStairs: 'メイン階段',
          mainGarage: 'メインガレージ',
          garageEntrance: 'メインガレージ<br/>入口',
          westEntrance: '西入口',
          gamingRoomHallway: ' 娯楽室前<br/>廊下',
          gamingRoom: '娯楽室',
          bar: 'バー',
          greatRoom: 'リビング',
          diningRoom: 'ダイニングルーム',
          mainEntrance: '正面玄関',
          trophyRoom: '記念品室',
          kitchenHallway: 'キッチン<br/>前廊下',
          kitchen: 'キッチン',
          libraryHallway: '図書室廊下',
          libraryEntrance: '図書室前',
          library: '図書室',
          bedroomTerrace: 'ベッドルーム<br/>テラス',
          fireplaceHallway: 'リビング2階廊下',
          bedroomHallway: 'ベッドルーム<br/>前廊下',
          masterBathroom: 'メインバスルーム',
          masterBedroom: 'メインベッドルーム',
          office: 'オフィス',
          woodenTrail: '森の小道',
          campfireWood: 'キャンプファイア<br/>周辺の森',
          backyard: 'バックヤード',
          gazeebo: '展望台',
          cliffsideStairs: '断崖エリア<br/>階段',
          cliffsideWoods: '崖際の森',
          backyardPatio: 'バックヤード<br/>パティオ',
          officeBalcony: 'オフィス<br/>バルコニー',
          helipadTrail: 'ヘリポートへの道',
          helipad: 'ヘリポート',
          frontYardPatio: 'フロントヤード<br/>パティオ',
          frontYard: 'フロントヤード',
          bathroomBalcony: 'バスルーム<br/>バルコニー',
          libraryBalcony: '図書室<br/>バルコニー',
          bedroomBalcony: 'ベッドルーム<br/>バルコニー',
          snowmobiles: 'スノーモービル'
        },
        club: {
          spawnMainEntrance: 'メインゲート',
          spawnShippingDocks: '搬入口',
          spawnWarehouse: '倉庫',
          spawnConstructionSite: '建設現場',
          easternSubroof: '東側サブルーフ',
          constructionSite: '建設現場',
          container: 'コンテナ',
          graffitiArea: '落書きエリア',
          recreationArea: '娯楽エリア',
          junkyard: '廃品置場',
          VIPParking: 'VIP専用駐車場',
          mainGate: 'メインゲート',
          parking: '駐車場',
          kennels: '犬舎',
          trash: 'ゴミ収集所',
          centralSubroof: '中央<br/>サブルーフ',
          easternRoof: '東側屋上',
          centralRoof: '中央ルーフ',
          westernRoof: '西側屋上',
          balcony: 'バルコニー',
          escapeTunnel: '避難用<br/>トンネル',
          arsenalRoom: '武器保管室',
          basementHallway: '地下廊下',
          memorialRoom: '記念室',
          utilityRoom: '収納室',
          oilPit: 'オイルピット',
          centralStairs: '中央階段',
          church: '祭壇',
          frontPorch: 'フロントポーチ',
          garage: 'ガレージ',
          lobby: 'ロビー',
          stockRoom: '倉庫',
          garageStorage: 'ガレージ<br/>倉庫',
          lounge: 'ラウンジ',
          bar: 'バー',
          centralHallway: '中央廊下',
          kitchen: 'キッチン',
          kitchenEntrance: 'キッチン裏口',
          westernHallway: '西側廊下',
          stripClub: 'ナイトクラブ',
          junkyardEntrance: '廃品置場側<br/>出入口',
          sideEntrance: '通用口',
          changingRoom: '更衣室',
          bedroom: 'ベッドルーム',
          bathroom: 'バスルーム',
          bedroomHallway: 'ベッドルーム前廊下',
          logisticOffice: '物流オフィス',
          gym: 'ジム',
          secretStash: '隠し金庫',
          CCTVRoom: '監視室',
          cashRoom: '金庫室',
          easternStairs: '東側階段'
        },
        coastline: {
          aquarium: 'アクアリウム',
          backAlley: '裏通路',
          balcony: 'バルコニー',
          bathroom: 'バスルーム',
          billiardsRoom: 'ビリヤードルーム',
          blueBar: 'ブルー・バー',
          cantina: 'バー',
          courtyard: '中庭',
          djBooth: 'DJブース',
          garageRoof: 'ガレージ屋上',
          hallOfFame: 'ホールオブフェイム',
          hallway: '廊下',
          hookahDeck: 'フッカー<br/>デッキ<br/>(表示されてない）',
          hookahLounge: 'フッカーラウンジ',
          kitchen: 'キッチン',
          mainEntrance: '正面入口',
          mainLobby: 'メインロビー',
          northStairs: '北階段',
          office: 'オフィス',
          penthouse: 'ペントハウス',
          pool: 'プール',
          poolEntrance: 'プール入口',
          poolSide: 'プールサイド',
          rooftop: '屋上',
          ruins: '廃墟',
          securityRoom: 'セキュリティ<br/>ルーム',
          serviceEntrance: '勝手入口',
          southHallway: '南廊下',
          southPromenade: '南通路',
          southStairs: '南階段',
          sunriseBar: 'サンライズ・バー',
          sunRoom: 'サンルーム',
          theater: '劇場',
          terrace: 'テラス',
          toilets: 'トイレ',
          vipLounge: 'VIPラウンジ',
          walkway: '通路'
        },
        consulate: {
          spawnRiotBarricade: 'バリケード',
          spawnPoliceLine: '警察警戒線',
          spawnGasStation: 'ガソリンスタンド',
          spawnSideEntrance: '通用口',
          exitStairs: '非常階段',
          garage: 'ガレージ',
          basementCorridor: '地下通路',
          securityRoom: 'セキュリティ<br/>ルーム',
          cafeteria: 'カフェテリア',
          mainStairs: 'メイン階段',
          lockerHallway: 'ロッカー室',
          serviceStairs: '従業員用<br/>階段',
          electricRoom: '配電室',
          storageRoom: '貯蔵室',
          archives: '資料室',
          archivesCorridor: '資料室前<br/>廊下',
          pressRoom: '会見室',
          westCorridor: '西通路',
          publicBathroom: '共同バスルーム',
          antechamber: '控え室',
          lobby: 'ロビー',
          eastCorridor: '東通路',
          tellers: 'ビザ申請<br/>窓口',
          visaOffice: 'ビザ申請<br/>オフィス',
          visaEntrance: 'ビザ申請<br/>エントランス',
          frontDoor: 'フロントドア',
          balcony: 'バルコニー',
          copyRoom: 'コピー室',
          cabinet: '納戸',
          administrationOffice: '管理事務室',
          breakRoom: '休憩室',
          frontOffice: 'フロントオフィス',
          meetingRoom: '会議室',
          hallway: '廊下',
          consulFrontDesk: '領事応接室',
          privateBathroom: '専用トイレ',
          waitingRoom: '待合室',
          consulateOffice: '領事オフィス',
          garageWay: 'ガレージ進入路',
          courtyard: '中庭',
          backCourtyard: '裏庭',
          sideEntrance: '通用口',
          dumpster: 'ゴミ捨て場',
          parking: '駐車場',
          gardens: 'ガーデン',
          fountain: '噴水',
          emergencyExit: '非常口',
          garageRoof: 'ガレージ<br/>屋上',
          memorialGarden: '記念庭園',
          policeLine: '警察警戒線',
          riotBarracade: 'バリケード',
          eastFrontYard: '東フロントヤード',
          westFrontYard: '西フロントヤード',
          frontAlley: '正面路地',
          buildingRoof: '建物屋上'
        },
        favela: {
          packagingRoom: '包装室',
          footballApartment: 'フットボール<br/>アパート',
          armoryRoom: '武器庫',
          auntsApartment: 'アント<br/>アパート',
          auntsBedroom: 'アント<br/>ベッドルーム',
          growRoom: '育成室',
          bikersApartment: 'バイカー<br/>アパート',
          methLab: '薬物ラボ',
          footballBedroom: 'フットボール<br/>ベッドルーム',
          footballOffice: 'フットボール<br/>オフィス',
          bikersBedroom: 'バイカー<br/>ベッドルーム',
          backStairs: '裏階段',
          auntsHall: 'アントホール',
          kidsRoom: '子供部屋',
          mainStairs: 'メイン階段',
          stairHall: '階段ホール',
          roof: '屋根',
          laundryRoom: '洗濯室',
          vaultRoom: '金庫室',
          bikersGarage: 'バイカー<br/>ガレージ',
          backAlley: '裏通り',
          schoolAlley: '学校通り',
          footballPitch: 'フットボール場',
          market: '市場',
          marketAlley: '市場<br/>通り',
          schoolRooftops: '学校屋上',
          street: '通り',
          rooftops: '屋上',
          courtyard: '中庭',
          accessAlley: '連絡通路',
          shop: '店<br/>(表示されてない)',
          marketRooftops: '市場屋上'
        },
        hereford: {
          spawnTrainingCourse: '訓練場',
          spawnParking: '駐車場',
          spawnShootingRange: '射撃練習場',
          armory: '武器庫',
          lockers: 'ロッカー',
          corridor: '通路',
          mainStairs: 'メイン階段',
          maintenanceArea: 'メンテナンス<br/>エリア',
          briefingRoom: '作戦会議室',
          basementEntrance: '地下入口',
          garage: 'ガレージ',
          TVRoom: 'AVルーム',
          garageCorridor: 'ガレージ通路',
          kitchen: 'キッチン',
          corridor1: '1F通路',
          diningRoom: 'ダイニング<br/>ルーム',
          pianoLounge: 'ピアノラウンジ',
          office: 'オフィス',
          masterBedroom: 'メインベッドルーム',
          backAccess: '裏口',
          laundryRoom: '洗濯室',
          bathroom: 'バスルーム',
          kidsBedroom: '子供部屋',
          ballisticMatDepot: '防弾マット<br/>保管庫',
          storage: '倉庫',
          storageCorridor: '3F通路',
          dummyDepot: 'ダミー保管庫',
          workshop: '作業室',
          shootingRangeEastEntrance: '射撃練習場<br/>東ルート',
          shootingRangeWestEntrance: '射撃練習場<br/>西ルート',
          tireSetting: 'タイヤ設置場所',
          observationRamp: '監視スロープ',
          barracks: '兵舎',
          busBackAlley: '大型車用通路',
          rappelTower: 'ラペリングタワー',
          terrace: 'テラス',
          frontAccess: '正面口ルート',
          chapelGate: 'チャペルゲート',
          forkliftArea: 'フォークリフト<br/>エリア',
          sideStairsAlley: '側面階段<br/>路地',
          sideStairs: '側面階段',
          garageTop: 'ガレージ屋根',
          rooftop: '屋上',
          parkingEntrance: '駐車場入口'
        },
        house: {
          spawnConstructionSite: '資材置き場',
          spawnRiverDocks: '桟橋',
          spawnAPCArea: '装甲車エリア',
          spawnSideStreet: '脇道',
          depot: '保管庫',
          trainingRoom: '訓練室',
          kitchenStairs: 'キッチン階段',
          sideStairs: '側面階段',
          laundryRoom: '洗濯室',
          garage: 'ガレージ',
          livingRoom: 'リビング<br/>ルーム',
          backEntrance: '裏口',
          lobby: 'ロビー',
          kitchen: 'キッチン',
          office: 'オフィス',
          diningRoom: 'ダイニング<br/>ルーム',
          workshop: '作業室',
          kidsBedroom: '子供部屋',
          upperHallway: '2F廊下',
          lobbyStairs: 'ロビー<br/>階段',
          walkIn: 'ウォークイン',
          masterBedroom: 'メインベッドルーム',
          bathroom: 'バスルーム',
          sideStreet: '脇道',
          garageEntrance: 'ガレージ入口',
          garden: 'ガーデン',
          backAlley: '裏庭',
          patio: 'パティオ',
          jacuzzi: 'ジェットバス',
          basementStairs: '地下階段',
          treehouseAlley: 'ツリーハウス',
          frontYard: 'フロントヤード',
          frontStreet: '正面通り',
          frontPorch: 'フロントポーチ',
          backPorch: 'バックポーチ',
          backPorchTop: 'バックポーチ屋根',
          frontPorchTop: 'フロントポーチ屋根',
          rooftop: '屋上'
        },
        kanal: {
          spawnFloatingDock: '浮きドック',
          spawnSailboats: '帆船',
          spawnConstructionSite: '建設現場',
          boatGarage: 'ボートガレージ',
          boatSupplies: 'ボート倉庫',
          pipes: '漏水区画',
          boatSuppliesHallway: 'ボート<br/>倉庫前<br/>廊下',
          lockerRoom: 'ロッカールーム',
          coastGuardStairs: '沿岸警備<br/>階段',
          showers: 'シャワー<br/>ルーム',
          showersCorridor: 'シャワー<br/>ルーム前',
          loadingDock: '搬出口',
          machineHallway: '機械室前<br/>廊下',
          controlCenterStairs: '管制センター<br/>階段',
          holdingRoom: '待合室',
          holdingRoomHallway: '待合室<br/>廊下',
          radio: '無線室',
          coastGuardOffice: '沿岸警備<br/>オフィス',
          archives: '資料室',
          coastGuardHall: '事務所前<br/>廊下',
          mainEntrance: '正面玄関',
          lounge: 'ラウンジ',
          bridge: '渡り廊下',
          modelRoom: 'モデルルーム',
          securityRoom: 'セキュリティ<br/>ルーム',
          projectorRoom: '映写室',
          mapsOffice: '海図管理室',
          mapsOfficeHallway: '海図管理室前<br/>廊下',
          kitchen: 'キッチン',
          cafeteria: 'カフェテリア',
          plantsHallway: 'プラント育成区画',
          thirdFloorExit: '3階出口',
          controlRoom: '管制室',
          electricRoom: '配電室',
          controlRoomHallway: '管制室廊下',
          serverRoom: 'サーバー<br/>ルーム',
          lockgate: '水門',
          quayContainers: '埠頭コンテナ',
          lockgateTunnel: '水門トンネル',
          waterWalkway: '水上通路',
          quayConstruction: '埠頭建設現場',
          constructionSite: '建設現場',
          constructionEntrance: '建設現場<br/>入口',
          parkingAlley: '駐車場路地',
          parkingEntrance: '駐車場入口',
          middleRoad: '中央道路',
          forkliftAlley: 'フォークリフト用<br/>通路',
          frontLawn: '前庭',
          basementStairs: '地下階段',
          coastGuardRoof: '沿岸警備<br/>屋上',
          bridgeRoof: 'ブリッジ<br/>ルーフ',
          roofBrickPile: 'レンガ屋根',
          balcony: 'テラス',
          controlCenterRoof: '管制センター<br/>屋上',
          dockStairs: 'ドック階段',
          parking: '駐車場',
          boatCrane: 'ボートクレーン',
          mapArchives: 'マップ資料室'
        },
        kafe: {
          spawnRiverDocks: '桟橋',
          spawnChristmasMarket: 'クリスマスマーケット',
          spawnPark: '公園',
          laundryRoom: '洗濯室',
          frontStairs: '正面階段',
          bakery: 'ベーカリー',
          bakeryKitchen: 'ベーカリー<br/>キッチン',
          kitchenPrep: 'キッチン<br/>準備室',
          kitchenGrill: 'キッチン<br/>グリル',
          kitchenPickUp: 'キッチン<br/>配膳室',
          coldRoom: '冷蔵室',
          diningRoom: 'カフェ1F',
          backStairs: '裏口<br/>階段',
          coldRoomCorridor: '冷蔵室前<br/>通路',
          VIPSection: 'VIP席',
          barStairs: 'バー階段',
          storage: '倉庫',
          museumEntrance: '博物館<br/>入口',
          miningRoom: '掘削機<br/>展示室',
          trainMuseum: '列車展示室',
          pillarDiningRoom: 'カフェ2F',
          mainCorridor: 'メイン通路',
          readingRoomCorridor: '読書室通路',
          readingRoom: '読書室',
          fireplaceHall: '暖炉ホール',
          cigarShop: 'シガーショップ',
          cigarLounge: 'シガーラウンジ',
          bar: 'バー',
          barBackstore: 'バー倉庫',
          washrooms: '洗面所',
          washroomCorridor: '洗面所前通路',
          cocktailLounge: 'カクテル<br/>ラウンジ',
          cocktailLoungeEntrance: 'カクテル<br/>ラウンジ<br/>入口',
          westMainStreet: 'メインストリート西',
          mainStreet: 'メインストリート',
          eastMainStreet: 'メインストリート東',
          bakeryParking: 'ベーカリー<br/>駐車場',
          bakeryRoof: 'ベーカリー屋上',
          cafeRoofTop: 'カフェ屋上',
          terrace: 'テラス',
          backAlley: '裏路地',
          garrage: 'ガレージ',
          parkAlley: '公園路地'
        },
        oregon: {
          spawnJunkyard: '廃品置場',
          spawnStreet: '通り',
          spawnConstructionSite: '建設現場',
          towerStairs: 'タワー階段',
          boilerRoom: 'ボイラー室',
          electricRoom: '配電室',
          bunkerEntrance: 'バンカー<br/>入口',
          bunker: 'バンカー',
          basementCorridor: '地下通路',
          supplyRoom: '備品質',
          laundryRoom: '洗濯室',
          laundryStorage: '洗濯室<br/>倉庫',
          laundryStairs: '洗濯室<br/>階段',
          office: 'オフィス',
          diningHall: '食堂',
          diningHallCorridor: '食堂通路',
          showers: 'シャワールーム',
          kitchen: 'キッチン',
          bathroom: '共同トイレ',
          dormStairs: '共同寝室<br/>の階段',
          pantry: '食料庫',
          bathroomCorridor: '共同トイレ前',
          classroom: '教室',
          lobby: 'ロビー',
          mainStairs: 'メイン<br/>階段',
          meetingHall: '会議ホール',
          rearStage: 'ホール裏',
          garage: 'ガレージ',
          officeStorage: 'オフィス<br/>備品置き場',
          kidsDorm: '子供部屋',
          dormMainHall: '共同寝室(大)',
          smallDorms: '共同寝室(小)',
          armoryCorridor: '武器庫通路',
          masterBedroom: 'メイン<br/>ベッドルーム',
          armory: '武器庫',
          walkIn: 'ウォークイン',
          attic: '裏屋根',
          watchTower: '監視タワー',
          busYard: 'バスヤード',
          junkyard: '廃品置き場',
          farmlands: '農地',
          shootingRange: '射撃練習場',
          constructionSite: '建設現場',
          parking: '駐車場',
          mainEntrance: '正面玄関',
          street: '通り',
          balcony: 'テラス',
          diningHallRoof: '食堂屋上',
          officeRoof: 'オフィス屋上',
          meetingHallEntrance: '会議室入口',
          garageRoof: 'ガレージ屋上',
          dormsRoof: '共同寝室<br/>屋根',
          meetingHallRoof: '会議ホール<br/>屋根',
          supplyCloset: '備品収納棚'
        },
        plane: {
          spawnOfficialEntrance: '前方搭乗口',
          spawnReporterEntrance: '記者エントランス',
          spawnServiceEntrance: '前方サービス<br/>エントランス',
          pressBathroom: 'プレス<br/>バスルーム',
          meetingRoom: '会議室',
          frontHallway: '正面廊下',
          executiveOffice: 'VIPオフィス',
          mainEntrance: '前方搭乗口',
          frontStairs: '正面階段',
          pantry: '食料庫',
          kitchen: 'キッチン',
          executiveHallway: 'VIP専用通路',
          executiveBedroom: 'VIP<br/>ベッドルーム',
          changeRoom: '更衣室',
          laund: '洗濯室',
          frontServiceEntrance: '前方サービス<br/>エントランス',
          rightWing: '右翼',
          backServiceEntrance: '後方サービス<br/>ドア',
          reporterEntrance: '後方搭乗口',
          leftWing: '左翼',
          staffSection: 'スタッフ席',
          securityRoom: 'セキュリティ<br/>ルーム',
          pressSectionA: '記者席A',
          pressSectionB: '記者席B',
          backStairs: '後方階段',
          cargoHold: '貨物庫',
          serviceCorridor: '従業員用通路',
          storage: '倉庫',
          luggageHold: '荷物庫',
          firstAidStation: '救護室',
          cargoFrontEntrance: '貨物用<br/>正面入口',
          cockpitStairs: 'コックピット<br/>階段',
          cabinStaff: 'スタッフルーム',
          radioCabin: '無線室',
          cabin: 'コックピット',
          caterer: 'サービスドア',
          serverRoomA: 'サーバールームA',
          serverRoomB: 'サーバールームB',
          technicalSeating: 'テックシート',
          ladderRoom: 'ハシゴ室'
        },
        skyscraper: {
          helipad: 'ヘリポート',
          tower: 'タワー',
          ventilationUnits: '空調設備',
          kitchen: 'キッチン',
          pantry: '食料庫',
          deliveryRoom: 'デリバリー<br/>ルーム',
          houseLobby: '建物ロビー',
          houseEntrance: '建物入口',
          mainEntrance: '正面玄関',
          reception: '受付',
          bedroom: 'ベッドルーム',
          closet: 'クローゼット',
          bathroom: 'バスルーム',
          houseStairs: '建物<br/>階段',
          restaurant: 'レストラン',
          toilet: 'トイレ',
          bbq: 'BBQ',
          backHallway: '裏廊下',
          mainStairs: 'メイン<br/>階段',
          geishaRoom: '芸者部屋',
          hallway: '廊下',
          karaoke: 'カラオケ',
          teaRoom: '茶室',
          taiko: '太鼓',
          terrace: 'テラス',
          backStairs: '裏階段',
          houseBalcony: '建物<br/>バルコニー',
          exhibition: '展示',
          lounge: 'ラウンジ',
          workOffice: 'オフィス',
          clearance: 'VIP<br/>クリアランス',
          peacefullTree: '平穏の木',
          contemplationGarden: '沈思の庭園',
          westGarden: '庭園(西)',
          bridge: '橋',
          gazeebo: '展望台',
          restBalcony: 'レストラン<br/>バルコニー',
          northGarden: '庭園(北)',
          eastGarden: '庭園(東)',
          sandGarden: '枯山水',
          sidePath: '脇道',
          sideStairs: '側面階段',
          dragonStatue: '竜の像',
          coveredWalkway: '屋根付き<br/>通路'
        },
        yacht: {
          spawnSubmarine: '潜水艦',
          spawnZodiak: 'ゾディアック',
          spawnSnowMobile: 'スノーモービル',
          mapsRoom: 'マップルーム',
          cockpit: 'コックピット',
          cockpitHallway: 'コックピット前廊下',
          captainsOffice: '船長室',
          cockpitBalcony: 'コックピット<br/>バルコニー',
          topDeckStairs: 'トップ<br/>デッキ<br/>階段',
          helipadEntrance: 'ヘリポート<br/>入口',
          helipad: 'ヘリポート',
          spaDeck: 'スパ<br/>デッキ',
          eastDeck: '東デッキ',
          westDeck: '西デッキ',
          frontDeck: 'フロント<br/>デッキ',
          masterBedroom: 'メイン<br/>ベッドルーム',
          casino: 'カジノ',
          pokerRoom: 'ポーカー<br/>ルーム',
          bathroom: 'バスルーム',
          bedroomHallway: 'ベッドルーム前廊下',
          casinoHallway: 'カジノ前廊下',
          globeHallway: '地球儀廊下',
          lounge: 'ラウンジ',
          cafeteria: 'カフェテリア',
          engine: 'エンジン',
          backEntrance: 'エンジン<br/>後方入口',
          rearDeck: '後方<br/>デッキ',
          serverRoom: 'サーバー<br/>ルーム',
          engineStorage: 'エンジン<br/>スペース',
          engineControl: 'エンジン<br/>制御装置',
          backStairs: '後方<br/>階段',
          emergencyExit: '非常口',
          engineHallway: 'エンジン前廊下',
          frontStairs: '正面<br/>階段',
          kitchen: 'キッチン',
          staffDormitory: 'スタッフ用<br/>共同部屋',
          westBalcony: '西バルコニー',
          eastBalcony: '東バルコニー',
          kitchenHallway: 'キッチン前廊下',
          kitchenStairs: 'キッチン階段',
          kitchenPantry: 'キッチン<br/>食料庫',
          infirmary: '医療室',
          borealSubRoom: 'アクラーク号<br/>船倉',
          cafeteriaHallway: 'カフェテリア前廊下',
          engineUtility: 'エンジン設備',
          submarine: '潜水艦',
          westGlacier: '西側グレーシャー',
          eastHullBreach: '船体東側<br/>ブリーチ',
          eastGlacier: '東側グレーシャー',
          frozenRiver: '冷たい川',
          zodiac: 'ゾディアック',
          westHullBreach: '船体西側ブリーチ',
          kingOfTheWorld: 'キング・<br/>オブ・ザ・<br/>ワールド',
          roof: '屋上',
          anchorName: 'アンカー',
          aklarkSubEntrance: 'アクラーク号<br/>船倉入口'
        }
      }
    };

  R6MapsLangTerms.registerLanguage(name, terms);

  return  {
    name: name,
    terms: terms
  };
})(R6MapsLangTerms);
