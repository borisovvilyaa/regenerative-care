<template>
  <div class="accordion-container" id="FAQ">
    <div class="accordion">
      <div v-for="(faq, index) in faqs" :key="index" class="accordion-item">
        <div class="accordion-header" @click="toggleAccordion(index)">
          {{ faq.question }}
          <span
            class="accordion-icon"
            :class="{ 'rotate-icon': faq.open }"
          ></span>
        </div>
        <div class="accordion-body" :class="{ show: faq.open }">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQSection",
  data() {
    return {
      faqs: [
        {
          question: "What is Amniotic Wound Care?",
          answer:
            "Amniotic wound care involves the use of amniotic membrane or amniotic fluid-derived products to treat various types of wounds. The amniotic membrane is the innermost layer of the placenta and has unique properties that make it highly effective in wound healing.",
          open: true,
        },
        {
          question: "What does Regenerative Care provide?",
          answer:
            "Regenerative Care provides Amniotic Wound Care to patients with chronic and/or acute wounds by pairing the patient with qualified wound care certified physicians and nurse practitioners who are using the best in class Amniotic Membrane grafts. Our medical professionals always respond in a timely manner, and medical reports are completed by them within 48 hours of visitation.",
          open: false,
        },
        {
          question: "What types of wounds do we treat?",
          answer:
            "Regenerative Care treats a variety of chronic and acute wounds including Diabetic Foot Ulcers, Venous Leg Ulcers, Pressure Ulcers, Surgical Wounds, Burns, and Traumatic Injuries.",
          open: false,
        },
        {
          question: "What patients qualify for this treatment?",
          answer:
            "Patients with any chronic and/or acute wounds qualify as long as the wound is uninfected and hasn’t shown signs of healing for 30 days or more after conservative wound care treatment.",
          open: false,
        },
        {
          question: "How do we treat these wounds?",
          answer:
            "Amniotic Membrane Grafts: These are applied directly to the wound bed to provide a scaffold for new tissue growth.",
          open: false,
        },
        {
          question: "Who pays for Amniotic Wound Care?",
          answer:
            "Regenerative Care accepts payment through Medicare Part B for eligible patients. Patients on a Medicare Advantage Plan can also receive treatment from our physicians in the plan’s network.",
          open: false,
        },
        {
          question: "Where can we render our services?",
          answer:
            "Regenerative Care provides services at home, residential care facilities, assisted living centers, skilled nursing facilities, and physician’s offices.",
          open: false,
        },
        {
          question:
            "How do we work with patients in Hospice Care and Home Health Care?",
          answer:
            "Patients in Home Health or Hospice who require Amniotic Wound Care are referred to Regenerative Care. Throughout the process, the patient always remains under the home health or hospice’s care and continues to receive its services. Regenerative Care provides regular updates on the patient’s condition and healing process to the home health or hospice, ensuring it is informed every step of the way.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.faqs.forEach((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
      });
    },
  },
};
</script>

<style scoped>
.accordion-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.accordion {
  width: 100%;
}

.accordion-item {
  background-color: #054052;
  border: 1px solid #054052;
  margin-bottom: 10px;
  border-radius: 5px;
}

.accordion-header {
  font-weight: 100;
  background-color: #054052;
  border-bottom: 1px solid white !important;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #054052;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 2rem;
}

.accordion-header:hover {
  background-color: #054d52;
}

.accordion-body {
  padding: 10px;
  font-weight: 100;
  color: white;
  display: none;
}

.accordion-body.show {
  display: block;
}

.accordion-icon {
  float: right;
  margin-left: 10px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid white;
  transition: transform 0.3s ease;
}

.rotate-icon {
  transform: rotate(180deg);
}

/* Медиазапросы для адаптации под мобильные устройства */
@media (max-width: 600px) {
  .accordion-header {
    font-size: 1.5rem;
    white-space: normal;
  }

  .accordion-body {
    font-size: 1rem;
  }
}
</style>
