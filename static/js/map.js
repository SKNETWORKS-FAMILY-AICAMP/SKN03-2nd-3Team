
var seoul ={
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "bbox": [126.76620435615891, 37.42829747263545, 127.18353917024454, 37.7010174173061],
        "geometry": {
            "__geometryId": "gangwon",
            "type": "Polygon",
            "mantle_properties": {
                "strokeColor": "green",
                "strokeOpacity": 0.7,
                "strokeWeight": 2,
                "strokeStyle": "solid",
                "strokeLineCap": "butt",
                "strokeLineJoin": "miter",
                "fillColor": "green",
                "fillOpacity": 0.2,
                "visible": true,
                "clickable": false,
                "zIndex": 0,
                "overlayType": "Polygon"
            },
            "coordinates": [
                [
                    [127.0198273, 37.7010174],
                    [127.0324142, 37.6918389],
                    [127.0486319, 37.6940629],
                    [127.0518035, 37.6858135],
                    [127.0633864, 37.6949219],
                    [127.0959959, 37.689071],
                    [127.0926947, 37.6485799],
                    [127.1111549, 37.6425634],
                    [127.1040662, 37.6216531],
                    [127.115715, 37.6196343],
                    [127.1184769, 37.6076128],
                    [127.1011437, 37.5760709],
                    [127.1049292, 37.5564216],
                    [127.1771461, 37.5811984],
                    [127.1819954, 37.5609924],
                    [127.1835391, 37.5451703],
                    [127.1631782, 37.5450174],
                    [127.1406196, 37.5155887],
                    [127.1411764, 37.5054302],
                    [127.1613903, 37.5002014],
                    [127.1585899, 37.4896011],
                    [127.1168965, 37.4586387],
                    [127.1043417, 37.4621729],
                    [127.0878556, 37.4448924],
                    [127.0721389, 37.4422612],
                    [127.0709529, 37.4302112],
                    [127.0523246, 37.4282974],
                    [127.0356919, 37.4391453],
                    [127.0346933, 37.4641548],
                    [127.0145096, 37.4548612],
                    [127.0036753, 37.4677203],
                    [126.9745795, 37.4544128],
                    [126.9629429, 37.4402804],
                    [126.9386219, 37.4360285],
                    [126.9283987, 37.4502126],
                    [126.9029875, 37.4340675],
                    [126.8683489, 37.4951078],
                    [126.8449551, 37.4734723],
                    [126.8146285, 37.4746494],
                    [126.8235871, 37.4877424],
                    [126.8130123, 37.4964006],
                    [126.8288372, 37.5265085],
                    [126.8221212, 37.5406778],
                    [126.8034927, 37.5430909],
                    [126.7944251, 37.5358288],
                    [126.7918192, 37.5437462],
                    [126.7662043, 37.5542423],
                    [126.7936954, 37.5815938],
                    [126.8025814, 37.6050327],
                    [126.8536318, 37.5717904],
                    [126.8762605, 37.5781852],
                    [126.8854099, 37.5938826],
                    [126.8996438, 37.5898169],
                    [126.9122798, 37.6443153],
                    [126.904802, 37.649201],
                    [126.9241229, 37.6461062],
                    [126.9475648, 37.6592153],
                    [126.9571081, 37.6528372],
                    [126.959803, 37.6297308],
                    [126.9755798, 37.6317525],
                    [126.9850845, 37.6373144],
                    [126.9796583, 37.6560386],
                    [126.9940175, 37.6667831],
                    [126.9921978, 37.6796269],
                    [127.0086637, 37.6844495],
                    [127.0096664, 37.6966998],
                    [127.0198273, 37.7010174]
                ]
            ]
        },
        "properties": {
            "crs": "epsg:4326",
            "admcode": "1100000000",
            "navercode": "09",
            "area0": "kr",
            "area1": "서울특별시",
            "area2": "",
            "area3": "",
            "area4": "",
            "meterPerPixel": "512",
            "level": 3
        }
    }]
}

var map = new naver.maps.Map(document.getElementById('map'), {
    zoom: 11,
    mapTypeId: 'normal',
    center: new naver.maps.LatLng(37.566205021936, 126.97770627907)
});

naver.maps.Event.once(map, 'init', function(e) {
    map.data.setStyle(function(feature) {
        var mantle_properties = feature.geometryCollection[0].getRaw().mantle_properties;
        var styleOptions = {
            ...mantle_properties,
        };
        return styleOptions;
    });

    map.data.addGeoJson(seoul, true);
});

//////////////////////////////////////////////////
let markers = []
let infoWindows = [];
let index = 0 

function addMarker(shop){
    var urlMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(shop['latitude'], shop['longitude']),
        map: map,
        title: 'urlMarker',
        icon: iconUrl[index],
        animation: naver.maps.Animation.DROP
    });
    index = index +1;
    index = index % 2;
    markers.push(urlMarker); 

    var contentString1= [
        '<div class="iw_inner">',
        `   <h3>${shop.fclty_nm}</h3>`,
        `   <p>${shop.fclty_road_nm_addr} | ${shop.lnm_addr}`,
        `       ${shop.mlsfc_nm}<br>`,
        '   </p>',
        '</div>'
    ].join('');


    var contentString = `
    <div class="infowindow-content" style="
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        border: 1px solid #ccc;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    ">
        <h4 style="margin: 0; padding: 0 0 10px 0; font-size: 16px;">[${shop.mlsfc_nm}] ${shop.fclty_nm}</h4>
        <p style="margin: 0; font-size: 14px;">${shop.fclty_road_nm_addr}</p>
    </div>
    `;


    
    var infowindow = new naver.maps.InfoWindow({
        content: contentString,
        anchorSize: new naver.maps.Size(30, 30),
        anchorSkew: true
    });
    infoWindows.push(infowindow);  // InfoWindow를 배열에 추가

    naver.maps.Event.addListener(urlMarker, 'click', function() {
        if (urlMarker.getAnimation() !== null) {
            urlMarker.setAnimation(null);
        } else {
            urlMarker.setAnimation(naver.maps.Animation.BOUNCE);
        }

        if (infowindow.getMap()) {
            infowindow.close();
        } else {
            infowindow.open(map, urlMarker);
        }
    });
}

for (var shop of shops_list) {
    addMarker(shop);
    // 추가 작업 수행 가능
}

function moveToMarker(index) {
    var marker = markers[index];
    var position = marker.getPosition();
    map.setCenter(position);
    map.setZoom(15);  // 특정 위치로 이동 시 확대 레벨 조정

    // 모든 InfoWindow를 닫고 선택된 마커의 InfoWindow 열기
    infoWindows.forEach(iw => iw.close());
    infoWindows[index].open(map, marker);

    // 마커 클릭 효과 (아이콘 변경 및 애니메이션 활성화)
    markers.forEach((m, i) => {
        // 클릭된 마커에 애니메이션 설정
        if (i === index) {
            m.setAnimation(naver.maps.Animation.BOUNCE);
        } else {
            m.setAnimation(null);
        }
    });
}

const listContainer = document.querySelector('.list-container');  // .list-container 요소 선택
var page = 2;
function loadMoreObjects() {
    fetch(`${map_url}?page=${page}`, {
        method: "GET",
        headers: {
            "X-Requested-With": "XMLHttpRequest"  // 서버가 요청을 AJAX로 인식하게 하는 헤더
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        if (data['shop_list'].length > 0) {
            const buttonList = document.querySelector('.button-list');
            const currentPage = page;
            data['shop_list'].forEach(function(shop, index) {
                addMarker(shop);
                const button = document.createElement('button');
            button.className = 'card-button';
            button.onclick = function() {
                moveToMarker(index + (currentPage - 1) * 25);  // 페이지에 맞춰 인덱스 조정
            };

            // 카드 요소 생성
            const card = document.createElement('div');
            card.className = 'card';

            // 카드 내용 생성
            const cardContent = document.createElement('div');
            cardContent.className = 'card-content';

            // 제목 생성
            const title = document.createElement('h3');
            title.innerHTML = `[${shop.mlsfc_nm}] ${shop.fclty_nm}`;

            // 푸터 생성
            const footer = document.createElement('div');
            footer.className = 'card-footer';

            const address = document.createElement('span');
            address.textContent = shop.fclty_road_nm_addr;

            // 푸터에 주소 추가
            footer.appendChild(address);

            // 카드 내용에 제목과 푸터 추가
            cardContent.appendChild(title);
            cardContent.appendChild(footer);

            // 카드에 카드 내용 추가
            card.appendChild(cardContent);

            // 버튼에 카드 추가
            button.appendChild(card);

            // 버튼을 리스트에 추가
            buttonList.appendChild(button);
            });

        } else {
            listContainer.removeEventListener('scroll', onScroll);  // 더 이상 로드할 객체가 없을 때 스크롤 이벤트를 제거합니다.
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    })
    .finally(() => {
        page++;
    });
}

function onScroll() {
    // list-container의 스크롤이 끝에 도달했을 때
    console.log('scroll');
    if (listContainer.scrollTop + listContainer.clientHeight >= listContainer.scrollHeight - 1) {
        console.log('End of scroll, loading more objects...');
        loadMoreObjects();
    }
}

// .list-container에 스크롤 이벤트 리스너 추가
listContainer.addEventListener('scroll', onScroll);
