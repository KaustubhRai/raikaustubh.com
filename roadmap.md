In Secret Scanning. 

  Include Tool  - 
  
    git guardian : 
      https://www.gitguardian.com/ggshield#:~:text=ggshield%2C%20the%20GitGuardian%20CLI%20application,public%20API%20is%20closed%2Dsource.

  - a value will be required for git guardian to run properly


In Code Scanning/SAST

  Include Tools - 
  
    Semgrep
    Horusec
    Deepsource
    sonarqube

we can map the results, (if we have the CVE number from all the above tools) through CVE Map [https://github.com/projectdiscovery/cvemap?ref=blog.projectdiscovery.io]

and show the results final, at the end


post starting stuff, start with :

  a small differentiation between SAST and SCA
  
  -  SAST - tools analyze source code to detect security vulnerabilities, usually without executing the code. They are used to identify security issues early in the SDLC
    
  -  SCA - focus on identifying open source components in the software and checking them for security vulnerabilities, licensing issues, and other risks. They are crucial for managing the security of third-party components in a software project.


and then, Snyk mostly does the work for SCA. so no other tool for SCA


FINAL Merge for both 

and if the docker script for Code Scanning/SAST is ready then we can use both the docker images in a k8s. [look how to deploy on kubernetes, that both the tools run simultaneously and we get the results in end, for both the docker images] 
