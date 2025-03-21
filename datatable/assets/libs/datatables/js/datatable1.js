$(document).ready(function() {
    "use strict";
    $("#reportTable").DataTable({
        responsive: true,
        pagingType: "full_numbers",
        order: [],
        autoWidth: false, 
        aoColumns : [
            { sWidth: '15%' },
            { sWidth: '20%' },
            { sWidth: '20%' },
            { sWidth: '20%' },
            { sWidth: '30%' }
        ],
        dom: '<"top d-flex justify-content-between"<"dt-left-col d-flex align-items-center"l><"dt-right-group d-flex"Bf>>rt<"bottom d-flex justify-content-between"<"dt-info d-flex align-items-center"i><"dt-pagination"p>>',
        buttons: [
            {
                extend: 'collection',
                text: '<span class="mdi mdi-export" style="color:white !important;"> Export</span>',
                autoClose: true,
                buttons: [
                    { text: '<span class="mdi mdi-content-copy" style="color: gray;"> Copy</span>', extend: 'copyHtml5'},
                    { text: '<span class="mdi mdi-file-excel-outline" style="color: green;"></span><span style="color: gray;"> Excel</span>', extend: 'excelHtml5'},
                    { text: '<span class="mdi mdi-file-document-outline" style="color: orange;"></span><span style="color: gray;"> Csv</span>', extend: 'csvHtml5'},
                    { text: '<span class="mdi mdi-file-pdf-box" style="color: red;"></span><span style="color: gray;"> Pdf</span>', extend: 'pdfHtml5'},
                    {
                        text: '<span class="mdi mdi-code-json" style="color: blue;"></span><span style="color: gray;"> Json</span>',
                        className: 'export-btn',
                        action: function (e, dt, button, config) {
                            var data = dt.buttons.exportData();
                            var blob = new Blob([JSON.stringify(data)], { type: "application/json;charset=utf-8;" });
                            saveAs(blob, 'Yardi Report.json');
                        }
                    },
                    { text: '<span class="mdi mdi-printer" style="color: purple;"></span><span style="color: gray;"> Print</span>', extend: 'print', className: 'export-btn'}
                ],
                fade: false,
            },
            {
                extend: 'colvis',
                text: '<span class="mdi mdi-eye" style="color: white;"></span><span style="color: white;"> Show</span>',
                className: 'colvis-btn'
            }
        ],
        language: {
            "info": "Showing _START_ to _END_ of _TOTAL_ Records",
            "lengthMenu": "Show _MENU_ Records",
            "search": "",
            "infoEmpty": "Showing 0 to 0 of 0 Records",
            "infoFiltered": "(filtered from _MAX_ total Records)",
            "zeroRecords": "No matching Records found",
            "loadingRecords": "Loading Records...",
            searchPlaceholder: 'Search...'
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    });
});
