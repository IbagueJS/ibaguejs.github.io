<template lang="pug">
  #loader-wrapper
    #loader
    .loader-section.section-left
    .loader-section.section-right
</template>

<script>
export default {}
</script>

<style lang="scss">
#loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;

  #loader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #3498db;
    -webkit-animation: spin 2s linear infinite;
    /* Chrome, Opera 15+, Safari 5+ */
    animation: spin 2s linear infinite;
    /* Chrome, Firefox 16+, IE 10+, Opera */
    z-index: 1001;
    /* anything higher than z-index: 1000 of .loader-section */
    &:before {
      content: '';
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #e74c3c;
      -webkit-animation: spin 3s linear infinite;
      /* Chrome, Opera 15+, Safari 5+ */
      animation: spin 3s linear infinite;
      /* Chrome, Firefox 16+, IE 10+, Opera */
    }
    &:after {
      content: '';
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #ffe400;
      -webkit-animation: spin 1.5s linear infinite;
      /* Chrome, Opera 15+, Safari 5+ */
      animation: spin 1.5s linear infinite;
      /* Chrome, Firefox 16+, IE 10+, Opera */
    }
  }

  .loader-section {
    position: fixed;
    top: 0;
    width: 51%;
    height: 100%;
    background: #222222;
    z-index: 1000;
    &.section-left {
      left: 0;
    }
    &.section-right {
      right: 0;
    }
  }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(0deg);
    /* IE 9 */
    transform: rotate(0deg);
    /* Firefox 16+, IE 10+, Opera */
  }

  100% {
    -webkit-transform: rotate(360deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(360deg);
    /* IE 9 */
    transform: rotate(360deg);
    /* Firefox 16+, IE 10+, Opera */
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(0deg);
    /* IE 9 */
    transform: rotate(0deg);
    /* Firefox 16+, IE 10+, Opera */
  }

  100% {
    -webkit-transform: rotate(360deg);
    /* Chrome, Opera 15+, Safari 3.1+ */
    -ms-transform: rotate(360deg);
    /* IE 9 */
    transform: rotate(360deg);
    /* Firefox 16+, IE 10+, Opera */
  }
}
/* Loaded */
.loaded {
  #loader-wrapper {
    visibility: hidden;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-transition: all 0.3s 1s ease-out;
    transition: all 0.3s 1s ease-out;
    #loader {
      opacity: 0;
      -webkit-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
    }
    .loader-section {
      &.section-left {
        -webkit-transform: translateX(-100%);
        /* Chrome, Opera 15+, Safari 3.1+ */
        -ms-transform: translateX(-100%);
        /* IE 9 */
        transform: translateX(-100%);
        /* Firefox 16+, IE 10+, Opera */
        -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      &.section-right {
        -webkit-transform: translateX(100%);
        /* Chrome, Opera 15+, Safari 3.1+ */
        -ms-transform: translateX(100%);
        /* IE 9 */
        transform: translateX(100%);
        /* Firefox 16+, IE 10+, Opera */
        -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }
}
</style>
