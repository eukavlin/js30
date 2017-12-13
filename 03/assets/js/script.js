const inputs = document.querySelectorAll('.controls input');
const values = document.querySelectorAll('.controls span');
    function handleUpdate() {
      var space = $("#spacing").val();
      var blur = $("#blur").val();
      $(".spacing").html(space + "px");
      $(".blur").html(blur);
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      values.innerHTML = this.value;
    }


    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
