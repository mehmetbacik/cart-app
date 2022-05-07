<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <h1>Ödeme başarıyla tamamlandı.</h1>
        <button type="button" @click="$router.go(-1)" class="my-5 btn btn-light">
          Alışverişe Devam Et
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompletedCart",
};
</script>
