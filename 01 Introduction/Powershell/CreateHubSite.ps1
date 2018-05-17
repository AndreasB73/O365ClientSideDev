$adminUrl = "https://bachmaier-admin.sharepoint.com"
$hubSiteUrl = "https://bachmaier.sharepoint.com/sites/learning"
$user = "andreas@bachmaier.onmicrosoft.com"

Connect-PnPOnline -Url $adminUrl 

New-PnPSite -Type TeamSite -title "Learning" -alias "learning" -Description "Main site for learning"

#Add-PnPFile -Path ".\learning.png" -Folder "SiteAssets"

Connect-SPOService -Url $adminUrl

Register-SPOHubSite -Site $hubSiteUrl

Set-SPOHubSite -Identity $hubSiteUrl -LogoUrl $hubSiteUrl"/SiteAssets/learning.png" -Description "Main site for learning"

Grant-SPOHubSiteRights -Identity $hubSiteUrl -Principals $user -Rights Join

Add-SPOHubSiteAssociation -Site https://bachmaier.sharepoint.com/sites/training -HubSite https://bachmaier.sharepoint.com/sites/learning 


## Site Types: TeamSite | CommunicationSite