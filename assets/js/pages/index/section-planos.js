(function() {
  const sectionPlanos = document.querySelector("section.planos");
  const toggle = sectionPlanos.querySelector("div.toggle");

  const planoStarter = sectionPlanos.querySelector("div.starter");
  const planoMedium = sectionPlanos.querySelector("div.medium");
  const planoHigh = sectionPlanos.querySelector("div.high");
  const planoAdvanced = sectionPlanos.querySelector("div.advanced");

  const botaoStarter = planoStarter.querySelector("a");
  const botaoMedium = planoMedium.querySelector("a");
  const botaoHigh = planoHigh.querySelector("a");
  const botaoAdvanced = planoAdvanced.querySelector("a");

  var linkStarterMensal = "https://google.com/starter-mensal";
  var linkStarterAnual = "https://google.com/starter-anual";

  var linkMediumMensal = "https://google.com/medium-mensal";
  var linkMediumAnual = "https://google.com/medium-anual";

  var linkHighMensal = "https://google.com/high-mensal";
  var linkHighAnual = "https://google.com/high-anual";

  var linkAdvancedMensal = "https://google.com/advanced-mensal";
  var linkAdvancedAnual = "https://google.com/advanced-anual";

  var mensalAtivo = false;

  toggle.addEventListener("click", function() {
    sectionPlanos.classList.toggle("ativo");
    toggle.classList.toggle("ativo");

    if (mensalAtivo) {
      botaoStarter.href = linkStarterAnual;
      botaoMedium.href = linkMediumAnual;
      botaoHigh.href = linkHighAnual;
      botaoAdvanced.href = linkAdvancedAnual;
    } else {
      botaoStarter.href = linkStarterMensal;
      botaoMedium.href = linkMediumMensal;
      botaoHigh.href = linkHighMensal;
      botaoAdvanced.href = linkAdvancedMensal;
    }

    mensalAtivo = !mensalAtivo;
  });
})();
