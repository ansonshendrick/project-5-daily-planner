$(function () {
  var currentDayEl = $('#currentDay');
  var saveBtns = $('.saveBtn');
  var timeBlocks = $('.time-block');
  var today = dayjs();
  var currentHour = today.hour();

  saveBtns.on('click', function () {
    var id = $(this).closest('.time-block').attr('id');
    var description = $(this).siblings('.description').val();
    localStorage.setItem(id, description);
  });

  timeBlocks.each(function () {
    var hour = parseInt($(this).attr('id').split('-')[1]);
    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  timeBlocks.each(function () {
    var id = $(this).attr('id');
    var description = localStorage.getItem(id);
    $(this).find('.description').val(description);
  });

  currentDayEl.text(today.format('dddd, MMMM D'));
});
