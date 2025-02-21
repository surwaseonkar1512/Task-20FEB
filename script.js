function selectPlan(planId, price) {
  document.querySelectorAll(".plan").forEach((plan) => {
    plan.classList.remove("selected");
  });

  let selectedPlan = document.getElementById(planId).parentElement;
  selectedPlan.classList.add("selected");

  document.getElementById("total-price").innerText = `$${price}.00 USD`;
}
