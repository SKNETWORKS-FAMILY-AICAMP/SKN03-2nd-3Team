document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loading-overlay');

    // 로딩 팝업 표시 및 페이지 이동
    function handlePageTransition(url) {
        loadingOverlay.style.display = 'flex'; // 팝업 보이기
        setTimeout(function() {
            window.location.href = url; // 4초 후 페이지 이동
        }, 4000); // 4000ms = 4초
    }
    // desc.html
    document.getElementById('desc-link').addEventListener('click', function(event) {
        event.preventDefault(); // 기본 클릭 동작 방지
        handlePageTransition('/desc/'); // URL을 인자로 전달
    });  
});

document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loading-overlay');

    // 로딩 팝업 표시 및 페이지 이동
    function handlePageTransition(url) {
        loadingOverlay.style.display = 'flex'; // 팝업 보이기
        setTimeout(function() {
            window.location.href = url; // 4초 후 페이지 이동
        }, 4000); // 4000ms = 4초
    }
    //map.html
    document.getElementById('map-link').addEventListener('click', function(event) {
        event.preventDefault(); // 기본 클릭 동작 방지
        handlePageTransition('/map/'); // URL을 인자로 전달
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loading-overlay');

    // 로딩 팝업 표시 및 페이지 이동
    function handlePageTransition(url) {
        loadingOverlay.style.display = 'flex'; // 팝업 보이기
        setTimeout(function() {
            window.location.href = url; // 4초 후 페이지 이동
        }, 4000); // 4000ms = 4초
    }
    //map.html
    document.getElementById('aboutus-link').addEventListener('click', function(event) {
        event.preventDefault(); // 기본 클릭 동작 방지
        handlePageTransition('/aboutus/'); // URL을 인자로 전달
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loading-overlay');

    // 로딩 팝업 표시 및 페이지 이동
    function handlePageTransition(url) {
        loadingOverlay.style.display = 'flex'; // 팝업 보이기
        setTimeout(function() {
            window.location.href = url; // 4초 후 페이지 이동
        }, 4000); // 4000ms = 4초
    }
    //map.html
    document.getElementById('test-link').addEventListener('click', function(event) {
        event.preventDefault(); // 기본 클릭 동작 방지
        handlePageTransition('/test/'); // URL을 인자로 전달
    });
});