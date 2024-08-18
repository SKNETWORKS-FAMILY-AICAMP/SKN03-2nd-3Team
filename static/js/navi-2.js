document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    
    // 로딩 팝업 표시
    function showLoading() {
        loadingOverlay.style.display = 'flex'; // 팝업 보이기
        setTimeout(function() {
            loadingOverlay.style.display = 'none'; // 4초 후 팝업 숨기기
        }, 4000); // 4000ms = 4초
    }

    // 페이지 이동 시 로딩 팝업 표시
    document.getElementById('park-link').addEventListener('click', function() {
        showLoading();
        setTimeout(function() {
            window.location.href = '/park/'; // 페이지 이동
        }, 100); // 잠시 대기 후 페이지 이동
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    
    // 로딩 팝업 표시
    function showLoading() {
        loadingOverlay.style.display = 'flex'; // 팝업 보이기
        setTimeout(function() {
            loadingOverlay.style.display = 'none'; // 4초 후 팝업 숨기기
        }, 4000); // 4000ms = 4초
    }

    // 페이지 이동 시 로딩 팝업 표시
    document.getElementById('study-link').addEventListener('click', function() {
        showLoading();
        setTimeout(function() {
            window.location.href = '/study/'; // 페이지 이동
        }, 100); // 잠시 대기 후 페이지 이동
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    
    // 로딩 팝업 표시
    function showLoading() {
        loadingOverlay.style.display = 'flex'; // 팝업 보이기
        setTimeout(function() {
            loadingOverlay.style.display = 'none'; // 4초 후 팝업 숨기기
        }, 4000); // 4000ms = 4초
    }

    // 페이지 이동 시 로딩 팝업 표시
    document.getElementById('culture-link').addEventListener('click', function() {
        showLoading();
        setTimeout(function() {
            window.location.href = '/culture/'; // 페이지 이동
        }, 100); // 잠시 대기 후 페이지 이동
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const loadingOverlay = document.getElementById('loading-overlay');

//     // 로딩 팝업 표시 및 페이지 이동
//     function handlePageTransition(url) {
//         loadingOverlay.style.display = 'flex'; // 팝업 보이기
//         setTimeout(function() {
//             window.location.href = url; // 4초 후 페이지 이동
//         }, 4000); // 4000ms = 4초
//     }

//     // culture.html
//     document.getElementById('park-link').addEventListener('click', function(event) {
//         event.preventDefault(); // 기본 클릭 동작 방지
//         handlePageTransition('/park/'); // URL을 인자로 전달
//     });   
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const loadingOverlay = document.getElementById('loading-overlay');

//     // 로딩 팝업 표시 및 페이지 이동
//     function handlePageTransition(url) {
//         loadingOverlay.style.display = 'flex'; // 팝업 보이기
//         setTimeout(function() {
//             window.location.href = url; // 4초 후 페이지 이동
//         }, 4000); // 4000ms = 4초
//     }
//     // study.html
//     document.getElementById('study-link').addEventListener('click', function(event) {
//         event.preventDefault(); // 기본 클릭 동작 방지
//         handlePageTransition('/study/'); // URL을 인자로 전달
//     });        
    
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const loadingOverlay = document.getElementById('loading-overlay');

//     // 로딩 팝업 표시 및 페이지 이동
//     function handlePageTransition(url) {
//         loadingOverlay.style.display = 'flex'; // 팝업 보이기
//         setTimeout(function() {
//             window.location.href = url; // 4초 후 페이지 이동
//         }, 4000); // 4000ms = 4초
//     }

//     // culture.html
//     document.getElementById('culture-link').addEventListener('click', function(event) {
//         event.preventDefault(); // 기본 클릭 동작 방지
//         handlePageTransition('/culture/'); // URL을 인자로 전달
//     });   
// });