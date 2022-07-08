function dig(n) {
    document.form.area.value = document.form.area.value + n
  }
  function ris() {
    let c = document.form.area.value;
    if (c) {
      document.form.area.value = eval(c);
    }
  }

  function reset() {
    document.form.area.value = '';
  }

  function cancella() {
    let a = document.form.area.value;
    document.form.area.value = a.substring(0, a.length - 1);
  }