<script setup>
import { Pill, Clock, CheckCircle2 } from 'lucide-vue-next'
import Button from '@/shared/components/ui/Button.vue'
import Card from '@/shared/components/ui/Card.vue'
import CardContent from '@/shared/components/ui/CardContent.vue'
</script>

<template>
  <section class="px-4 pb-24">
    <h2 class="mb-3 text-sm font-semibold text-foreground">
      Medicine Reminder
    </h2>
    <Card class="border border-success/30 bg-success/5 shadow-sm">
      <CardContent class="p-4">
        <div class="flex items-start gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
            <Pill class="h-5 w-5 text-success" />
          </div>
          <div class="flex-1">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="font-medium text-foreground">Metformin 500mg</h3>
                <p class="text-xs text-muted-foreground">
                  1 tablet after breakfast
                </p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                class="h-8 w-8 p-0 hover:bg-success/10"
                aria-label="Mark as taken"
              >
                <CheckCircle2 class="h-5 w-5 text-success" />
              </Button>
            </div>
            <div class="mt-2 flex items-center gap-1.5">
              <Clock class="h-3.5 w-3.5 text-muted-foreground" />
              <span class="text-xs text-muted-foreground">
                Due in 30 minutes
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </section>
</template>
