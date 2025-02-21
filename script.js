function selectPlan(planId, price) {
  document.querySelectorAll(".plan").forEach((plan) => {
    plan.classList.remove("selected");
  });

  document.getElementById(planId).checked = true;
  document.getElementById("total-price").innerText = `$${price}.00 USD`;

  let selectedPlan = document.getElementById(planId).closest(".plan");
  selectedPlan.classList.add("selected");
}
