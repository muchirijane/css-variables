const inputs = document.querySelectorAll('.controls input');
     
//function for getting the values
    function handleUpadate (){
      const size = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + size);
     
    }

    inputs.forEach(input => input.addEventListener('change', handleUpadate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpadate));