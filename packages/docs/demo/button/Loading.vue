<template>
  <div>
    <easy-button type="primary" loading>Loading</easy-button>
    <easy-button type="primary" loading-icon="circle-notch" loading
      >Loading</easy-button
    >
    <easy-button type="primary" loading>
      <template #loading>
        <easy-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </easy-button>
  </div>
</template>
