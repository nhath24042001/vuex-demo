<template lang="">
  <div class="card">
    <img :src="product.img" alt="product_img" />
    <h3>{{ product.name }}</h3>
    <h3>Giá: {{ product.price }}.000.000 vnd</h3>
    <p>Mô tả: {{ description }}</p>
    <h3>Hãng: {{ product.category }}</h3>
    <button class="view-product" @click="$emit('view-product', product)">
      Xem chi tiết
    </button>
  </div>
</template>
<script>
export default {
  props: ["product"],
  computed: {
    description() {
      return this.product.description.substring(0, 50);
    },
  },
};
</script>
<style scoped>
.card {
  max-width: 250px;
  height: 480px;
  margin-right: 20px;
  margin-bottom: 10px;  
  padding: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
}

button {
  background-color: cadetblue;
  color: #fff;
  padding: 10px;
  border: none;
  font-weight: 600;
  border-radius: 7px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

img {
  width: 200px;
  height: 200px;
}
</style>
