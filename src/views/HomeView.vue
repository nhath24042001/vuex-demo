<template>
  <div class="home">
    <ProductDescription 
    :product="product"
    :active="active.product_drawer"
    v-on:close-product="closeProduct()"
    />

    <div class="product-container">
      <ProductCard
      v-for="(product, index) in products"
      :key="index"
      :product="product"
      v-on:view-product="viewProduct($event)"
      />
    </div>
  </div>
</template>

<script>
import products from "@/data/product";
import ProductCard from "@/components/ProductCard.vue";
import ProductDescription from '@/components/ProductDescription.vue'

export default {
  components: {
    ProductCard,
    ProductDescription
  },
  data() {
    return {
      products: products,
      product: null,
      active: {
        product_drawer: false
      }
    };
  },
  methods: {
    viewProduct(product){
      this.product = product;
      this.active.product_drawer = true;
      console.log(this.product);
    },
    closeProduct(){
      this.active.product_drawer = false;
    }
  }
};
</script>

<style>
.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
