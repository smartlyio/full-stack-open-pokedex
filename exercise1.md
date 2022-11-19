## Java

##### Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google.

Javalla esimerkiksi Checkstyle linttaukseen, testaukseen JUnit, ja itse buildaukseen Gradle. IDE:nä toimii IntelliJ, missä on hyvät integraatiot valmiina. Gradlelle luodaan taskit linttaukseen, testaukseen ja buildaukseen, jotka taas juostaan esimerkiksi GitHub Actionsin kautta.

##### What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!

IntelliJ tulee vastaan TeamCity. Helppoutena tässä olisi, että se on suoraan integroituna IntelliJ, sekä sen konfiguraatiot voi kirjoittaa Kotlinilla. Sille on myös helppokäyttöinen UI.

##### Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

Sanoisin, että pilvipohjainen ympäristö on parempi. Annettuina tietoina on, että 6 henkilön tiimi sekä julkaisu on "pian". Tiimi on pienikokoinen, joten jo sen perusteella on parempi valita pilvipohjainen ympäristö, elleivät he jostain syystä tarvitse esimerkiksi GPU:ta. Pilviympäristö on myös todennäköisemmin halvempi ratkaisu kuin oma palvelin pienessä projektissa. Myös julkaisun ollessa pian niin on nopeampaa setuppaa pilviympäristö kuin oma palvelin.
