function changeColor(button) {
    // Удаляем класс 'active' у всех кнопок
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // Добавляем класс 'active' только к нажатой кнопке
    button.classList.add('active');
  }