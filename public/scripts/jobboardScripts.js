$(function() {

    $(".job-basic-info").click(function() {
        // Get the Information
        var title = $(this).find('h3.title').text();
        var company_name = $(this).find('h3.company_name').text();
        var candidate_required_location = $(this).find('span.candidate_required_location').text();
        var job_type = $(this).find('span.job_type').text();
        var description = $(this).find('div.description').text();


        //Set the Information
        $("#jobTitle").html(title);
        $("#jobCompany").html(company_name);
        $("#jobLocation").html(candidate_required_location);
        $("#jobDescription").html(description);
        $("#JobType").html(job_type);

    })
})