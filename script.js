document.addEventListener('DOMContentLoaded', function() {
    const slotsCountElement = document.getElementById('slots-count');
    const totalSlots = 100;
    let availableSlots = 23; // Начальное количество мест

    // Обновление счетчика (можно сделать его динамическим, например, через API)
    function updateSlotsCount() {
        if (availableSlots > 0) {
            slotsCountElement.textContent = availableSlots;
        } else {
            slotsCountElement.textContent = '0';
        }
    }

    // Пример анимации счетчика (для наглядности)
    // setInterval(() => {
    //     if (availableSlots > 0) {
    //         availableSlots--;
    //         updateSlotsCount();
    //     }
    // }, 5000); // Уменьшаем на 1 каждые 5 секунд

    updateSlotsCount();
});