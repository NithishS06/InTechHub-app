
function initializeTableActions() {
  console.log("Attempting to initialize table actions...");

      $(".dots-btn").click(function (e) {
        e.stopPropagation();

        $(".dropdown-menu-mini").hide();
        $(this).siblings(".dropdown-menu-mini").toggle();
         console.log("Dropdown toggled");
      });


      // Column Sort
      $(".dropdown-item.sort").click(function () {
        console.log("Sort clicked"); 
        const columnIndex = $(this).data("column");

        const table = $("#include-customer-orders").find(".custom-table tbody");
        const rows = table.find("tr").toArray();

        rows.sort(function (a, b) {
          const valA = $(a).children("td").eq(columnIndex).text().toLowerCase();
          const valB = $(b).children("td").eq(columnIndex).text().toLowerCase();
          return valA.localeCompare(valB);
        });

        $.each(rows, function (i, row) {
          table.append(row);
        });

        $(".dropdown-menu-mini").hide();
         console.log("Table sorted by column", columnIndex);
      });


  console.log("Table actions initialization attempt finished.");
}
