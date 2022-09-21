

module.exports = templateData => {
  return `
  #${templateData.title}
  
  ## Discription
  ${templateData.description}
  
  ## Installation
  ${templateData.install}

  ## Usage
  ${templateData.usage}

  ## Contribution
  ${templateData.contribution}

  ## testing
  ${templateData.testing}

  ## License
  ${templateData.license}

  ## GitHub
  ${templateData.github}

  ## email
  ${templateData.email}
  `

  
}