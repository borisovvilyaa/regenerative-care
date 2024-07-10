<template>
  <div class="accordion-container">
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
          question: "What is Amniotic Tissue?",
          answer:
            "Amniotic tissue makes up the innermost portion of a woman’s placenta during pregnancy. It consists of amniotic membrane and amniotic fluid. Amniotic membrane is made up of two layers, chorion on the outside and amnion on the inside. The amnion surrounds and contains the amniotic fluid. Amniotic fluid surrounds and protects the growing embryo/fetus.",
          open: true,
        },
        {
          question: "Where does Amniotic Tissue come from?",
          answer:
            "Amniotic tissue collection DOES NOT require fetal sacrifice. The amniotic tissues used in Regenerative Care allografts are donated by consenting, healthy women between the ages of 18 – 45 who have just delivered a full-term, healthy baby through elective Cesarean section. A careful medical and social history is collected in advance to ensure donor mothers meet all eligibility requirements. Donor blood samples are collected and thoroughly screened for communicable diseases.",
          open: false,
        },
        {
          question: "How is Amniotic Tissue classified by the FDA?",
          answer:
            "The US Food and Drug Administration (FDA) classifies amniotic tissue as an HCT/P (Human Cells, Tissues, and Cellular and Tissue-Based Products). An HCT/P is regulated solely under section 361 of the PHS Act and 21 CFR part 1271 if it meets all the following criteria (21 CFR 1271.10(a)): the tissue is minimally manipulated, intended for homologous use and is not combined with other cells or tissues. There can be no systemic effect or dependence on the metabolic activity of living cells to achieve its primary function and the tissue has to have a localized effect in vivo.”",
          open: false,
        },
        {
          question: "Is obtaining Amniotic Tissue ethical?",
          answer:
            "Collection of placental tissues causes absolutely no harm to the newborn baby or mother. Amniotic tissue, which includes amniotic membrane and amniotic fluid, is taken from the innermost layer of the placenta. The placenta is collected AFTER a live birth delivered via elective cesarean section. The mother has volunteered to donate her placental tissues, which are typically discarded after the birth. Placental/amniotic tissue collection DOES NOT require fetal sacrifice.",
          open: false,
        },
        {
          question: "How is Amniotic Tissue collected and processed?",
          answer:
            "COLLECTION: Placental tissues are collected at several facilities around the country, following strict guidelines and consistent with industry best practices. At the time of Cesarean delivery (also known as C-section), the baby is delivered and the placenta and amniotic fluid, which are typically discarded, are saved. There is no harm to the newborn baby or mother. All tissues are then tested to ensure viability and safety. PROCESSING: The collected placental tissues (amniotic membrane and amniotic fluid) are processed to the highest standards. The process maintains the original characteristics of the amniotic tissue including its cellular components, growth factors, and collagen, and keeps the extracellular matrix intact. This specialized technique results in a graft that maintains the original healing characteristics and protective barrier properties of the amniotic tissue. All processed tissues are tested per USP guidelines prior to release.",
          open: false,
        },
        {
          question: "How is Amniotic Tissue used in wound repair?",
          answer:
            "Amniotic tissue is a regenerative biofactory, with key components known to optimize the wound healing environment. Its unique makeup includes cytokines, amino acids, carbohydrates, hyaluronic acid, and cellular components.¹ It also contains key growth factors and extracellular matrix proteins.¹ Amniotic tissue offers anti-inflammatory, anti-bacterial, re-epithelialization, and anti-fibrotic properties.²,³ It has published studies on its benefits and efficacy in wound care dating back over 100 years.⁴ Amniotic tissue mitigates the expression of class II antigens, minimizing immunogenicity and reducing the risk of adverse reactions.⁵",
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
  max-width: 1200px; /* Максимальная ширина аккордеона */
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
  background-color: black;
  border: 1px solid black;
  margin-bottom: 10px;
  border-radius: 5px;
}

.accordion-header {
  font-weight: 100;
  background-color: black;
  border-bottom: 1px solid white !important;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid black;
  white-space: nowrap; /* Предотвращает перенос текста на несколько строк */
  overflow: hidden; /* Предотвращает вылазание контента за пределы */
  text-overflow: ellipsis; /* Обрезает текст, если он слишком длинный */
  font-size: 2rem;
}

.accordion-header:hover {
  background-color: #333;
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
</style>
