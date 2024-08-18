document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.content-container');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupTitle = document.getElementById('popup-title');
    const popupImage = document.getElementById('popup-image');
    const popupDescriptionH3 = document.getElementById('popup-description-h3');
    const popupDescription = document.getElementById('popup-description');
    const popupClose = document.getElementById('popup-close');
    const popupPrev = document.getElementById('popup-prev');
    const popupNext = document.getElementById('popup-next');
    let currentPage = 0;
    let images = [];
    let h3Texts = [];
    let pTexts = [];

    items.forEach(item => {
        item.addEventListener('click', function () {
            const title = this.querySelector('.title').textContent;
            const imageSrcs = this.getAttribute('data-images');
            const h3TextsStr = this.getAttribute('data-h3');
            const pTextsStr = this.getAttribute('data-p');

            popupTitle.textContent = title;

            // h3 및 p 태그 텍스트 배열로 변환
            h3Texts = h3TextsStr ? h3TextsStr.split(',').map(text => text.trim()) : [];
            pTexts = pTextsStr ? pTextsStr.split(',').map(text => text.trim()) : [];

            // 이미지 배열로 변환
            images = imageSrcs ? imageSrcs.split(',').map(src => src.trim()) : [];
            currentPage = 0;

            // 첫 페이지로 이동
            updatePopupContent();

            popupOverlay.style.display = 'flex';
        });
    });

    popupClose.addEventListener('click', function () {
        popupOverlay.style.display = 'none';
    });

    popupPrev.addEventListener('click', function () {
        if (images.length > 0) {
            currentPage = (currentPage - 1 + images.length) % images.length;
            updatePopupContent();
        }
    });

    popupNext.addEventListener('click', function () {
        if (images.length > 0) {
            currentPage = (currentPage + 1) % images.length;
            updatePopupContent();
        }
    });

    // 팝업 외부 영역 클릭 시 팝업 닫기
    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });

    function updatePopupContent() {
        if (images.length > 0) {
            popupImage.src = images[currentPage];
            popupImage.style.display = 'block';
        } else {
            popupImage.style.display = 'none';
        }

        popupDescriptionH3.textContent = h3Texts[currentPage] || '';
        popupDescription.textContent = pTexts[currentPage] || '';

        // 버튼 표시 여부 결정
        popupPrev.style.display = (images.length > 1) ? 'block' : 'none';
        popupNext.style.display = (images.length > 1) ? 'block' : 'none';
    }
});
