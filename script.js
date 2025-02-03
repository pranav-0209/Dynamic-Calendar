document.addEventListener('DOMContentLoaded', () => {
    const calendarGrid = document.getElementById('calendar-grid');
    const currentMonthElement = document.getElementById('current-month');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    const eventDetails = document.getElementById('event-details');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const events = {
        "1-1": "New Year's Day",
        "1-14": "Makar Sankranti (Harvest Festival)",
        "1-15": "Pongal (Harvest Festival in South India)",
        "1-26": "Republic Day (India)",
        "2-2": "World Wetlands Day (Environmental Awareness)",
        "2-19": "Shivaji Jayanti (Birthday of Chhatrapati Shivaji Maharaj)",
        "2-21": "International Mother Language Day",
        "3-8": "International Women's Day",
        "3-22": "World Water Day",
        "3-24": "Holi (Festival of Colors)",
        "4-14": "Ambedkar Jayanti (Birthday of Dr. B.R. Ambedkar)",
        "4-22": "Earth Day (Environmental Awareness)",
        "5-1": "International Labour Day",
        "5-5": "Buddha Purnima (Birthday of Lord Buddha)",
        "6-21": "International Day of Yoga (India)",
        "7-15": "Rath Yatra (Chariot Festival)",
        "8-10": "Muharram (Islamic New Year)",
        "8-15": "Independence Day (India)",
        "8-19": "Raksha Bandhan (Festival of Sibling Bond)",
        "9-30": "Onam (Harvest Festival in Kerala)",
        "10-2": "Gandhi Jayanti (Birthday of Mahatma Gandhi)",
        "10-24": "Dussehra (Victory of Good over Evil)",
        "11-12": "Diwali (Festival of Lights)",
        "11-14": "Children's Day (India)",
        "12-25": "Christmas Day",
        "12-31": "New Year's Eve",
    };

    function renderCalendar(month, year) {
        calendarGrid.innerHTML = '';
        currentMonthElement.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            calendarGrid.appendChild(document.createElement('div'));
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.textContent = day;

            const eventKey = `${month + 1}-${day}`;
            if (events[eventKey]) {
                dayElement.classList.add('event-day');
                dayElement.setAttribute('data-event', events[eventKey]);


                dayElement.addEventListener('mouseenter', () => {
                    eventDetails.textContent = events[eventKey];
                });

                dayElement.addEventListener('mouseleave', () => {
                    eventDetails.textContent = "Hover over highlighted dates to see event details.";
                });
            }

            calendarGrid.appendChild(dayElement);
        }
    }

    prevMonthButton.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextMonthButton.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });


    renderCalendar(currentMonth, currentYear);
});