import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-redirect-handler',
  templateUrl: './redirect-handler.component.html',
  styleUrls: ['./redirect-handler.component.css']
})

export class RedirectHandlerComponent implements OnInit {
  authorizationCode: string | null = null;
  state: string | null = null;
  credentialsStatus: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Access query parameters from ActivatedRoute
    this.route.queryParams.subscribe((params) => {
      this.authorizationCode = params['code'];
      this.state = params['state'];
      this.credentialsStatus = "Pending";

      // Log the code and state to the console
      console.log('Authorization Code:', this.authorizationCode);
      console.log('State:', this.state);

      // You can send the code and state to your server for further processing if needed
      const apiUrl = 'http://127.0.0.1:5000/create_credentials';
      const payload = { authorizationCode: this.authorizationCode, state: this.state };

      this.http.post(apiUrl, payload).subscribe(response => {
        const apiResponse = response as { output: string };
        this.credentialsStatus = apiResponse.output;
      });
    });
  }
}
