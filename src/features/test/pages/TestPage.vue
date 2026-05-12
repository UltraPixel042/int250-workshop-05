<script setup>
import Avatar from '@/shared/components/ui/Avatar.vue'
import AvatarImage from '@/shared/components/ui/AvatarImage.vue';
import doctorAvatar from '@/assets/doctor-avartar.png'
import Button from '@/shared/components/ui/Button.vue';
import Card from '@/shared/components/ui/Card.vue';
import CardHeader from '@/shared/components/ui/CardHeader.vue';
import CardTitle from '@/shared/components/ui/CardTitle.vue';
import CardContent from '@/shared/components/ui/CardContent.vue';
import Input from '@/shared/components/ui/Input.vue';
</script>

<template>
  <Avatar>
    <AvatarImage :src="doctorAvatar"></AvatarImage>
  </Avatar>
  <Button variant="ghost">test btn</Button>
  <Card>
    <CardHeader>
      <CardTitle>test</CardTitle>
    </CardHeader>
    <CardContent>
      <span class="mb-3">Enter your age</span>
      <Input type="number" class="mt-3" placeholder="Enter your age"  />
      <Button class="mt-3">Submit</Button>
    </CardContent>
  </Card>
</template>
