10.times do |doc|
  FreelanceDocument.create!(title: "Document #{doc}",
    description: 'Af live-edge gochujang, polaroid synth lo-fi umami retro hell of hammock helvetica mixtape meggings taxidermy twee. Gentrify affogato brunch af synth, keytar photo booth mixtape sartorial knausgaard. Gluten-free YOLO lo-fi yuccie, authentic cronut food truck raw denim disrupt ramps organic subway tile bicycle rights. Vexillologist iceland mustache squid cornhole authentic.',
    file_url: "https://docs.google.com/document/d/1NQfYeMaxVqHsk0sDeAm2XLBjJdV5Nlx_dNfFn8oncso/edit?usp=sharing",
    image_url: "https://s3.amazonaws.com/devcamp-static/images/freelance-img.jpg")
end

